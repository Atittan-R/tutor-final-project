import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import Editprofile from "../../components/forms/Editprofile";
import Colors from "../../configs/Colors";
import { useGlobalVar } from "../../context/GlobalContex";
import API from "../../services/API";
import avatars from "../../configs/avatars";
import categories from "../../configs/categories";

export default function Me({ navigation }) {
  const { auth, authentication } = useGlobalVar();
  const [state, dispatch] = authentication;
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setname] = useState("")
  const [major, setmajor] = useState("")
  const [tel, settel] = useState("")
  const [email, setemail] = useState("")
  const [Profile, setProfile] = useState({
    username: "",
    phonenumber: "",
    email: "",
    avatar: 0,
    major: 0,
    roles:[],
  });

  const alertSignOut = () => {
    Alert.alert(
      "Sign out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => auth.signOut() },
      ],
      { cancelable: false }
    );
  };

  let user = JSON.parse(state.userData);
  if (user === null) {
    user = "-";
  }

  const getUser = async () => {
    const response = await API.get("/user/findProfile/" + user.id)
    const data = await response.data.user
    setProfile(data)
  }

  useEffect(() => {
    const unsub = navigation.addListener("focus", () => {
      getUser();
    });

    return unsub;
  }, []);
  
  useEffect(() => {
    setname(Profile.username)
    setmajor(Profile.major)
    settel(Profile.phonenumber)
    setemail(Profile.email)
}, [Profile])

  return (
    <>
      <ScrollView style={{ backgroundColor: Colors.background }}>
        <SafeAreaView>
          <View style={styles.coverArea}>
            <View style={styles.coverArea}>
              <Image source={avatars[Profile.avatar].image} style={styles.imageProfile} />
            </View>

            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Name</Text>
              <Text style={styles.textNormal}>
                {Profile.username === null ? "-" : name}
              </Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Major</Text>
              <Text style={styles.textNormal}>
                {Profile.major === null ? "-" : categories[Profile.major].name}
              </Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Tel.</Text>
              <Text style={styles.textNormal}>
                {Profile.phonenumber === null ? "-" : tel}
              </Text>
            </View>
            <View style={styles.viewItem}>
              <Text style={styles.textHeader}>Email</Text>
              <Text style={styles.textNormal}>
                {Profile.email === null ? "-" : email}
              </Text>
            </View>
            <Editprofile
              name={[name, setname]}
              major={[major, setmajor]} 
              tel={[tel, settel]}
              email={[email, setemail]}
              modalVisible={[modalVisible, setModalVisible]}
              profile={Profile}
              ProfileUser={[Profile, setProfile]}
            />
          </View>

          <View style={{ padding: 5 }}></View>
          <View style={styles.coverArea}>

            {Profile.roles.length === 1 && (
              <Pressable
                onPress={() => navigation.navigate("RegisterTutor")}
                // onPress={() => _retrieveData}
                style={({ pressed }) => [
                  { backgroundColor: pressed ? Colors.primary : Colors.white },
                  styles.wrapperCustom,
                ]}
              >
                <View style={styles.viewItem}>
                  <Icon
                    name="supervisor-account"
                    type="material"
                    color={Colors.secondary}
                  />
                  <Text style={styles.textNormal}>Register Tutor</Text>
                  <Icon
                    name="navigate-next"
                    type="material"
                    color={Colors.secondary}
                  />
                </View>
              </Pressable>
            )}
            <Pressable
              onPress={() => navigation.navigate("Feed", { name: "Request" })}
              // onPress={() => _retrieveData}
              style={({ pressed }) => [
                { backgroundColor: pressed ? Colors.primary : Colors.white },
                styles.wrapperCustom,
              ]}
            >
              <View style={styles.viewItem}>
                <Icon
                  name="add-task"
                  type="material"
                  color={Colors.secondary}
                />
                <Text style={styles.textNormal}>Request</Text>
                <Icon
                  name="navigate-next"
                  type="material"
                  color={Colors.secondary}
                />
              </View>
            </Pressable>
            <Pressable
              key={"home"}
              onPress={() => navigation.navigate("MyCourse")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? Colors.primary : Colors.white,
                },
                styles.wrapperCustom,
              ]}
            >
              <View style={styles.viewItem}>
                <Icon
                  name="menu-book"
                  type="material"
                  color={Colors.secondary}
                />
                <Text style={styles.textNormal}>My Course</Text>
                <Icon
                  name="navigate-next"
                  type="material"
                  color={Colors.secondary}
                />
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                setModalVisible(true);
              }}
              style={({ pressed }) => [
                { backgroundColor: pressed ? Colors.primary : Colors.white },
                styles.wrapperCustom,
              ]}
            >
              <View style={styles.viewItem}>
                <Icon name="edit" type="material" color={Colors.secondary} />
                <Text style={styles.textNormal}>Edit Profile</Text>
                <Icon
                  name="navigate-next"
                  type="material"
                  color={Colors.secondary}
                />
              </View>
            </Pressable>

            {Profile.roles.length === 2 && (
              <Pressable
                onPress={() => navigation.navigate("RoleSelect")}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? Colors.primary : Colors.white,
                  },
                  styles.wrapperCustom,
                ]}
              >
                <View style={styles.viewItem}>
                  <Icon
                    name="face"
                    type="material-icons"
                    color={Colors.secondary}
                  />
                  <Text style={styles.textNormal}>Select Role</Text>
                  <Icon
                    name="navigate-next"
                    type="material"
                    color={Colors.secondary}
                  />
                </View>
              </Pressable>
            )}
          </View>

          <View style={{ padding: 5 }}></View>

          <View style={styles.coverArea}>
            <Pressable
              onPress={alertSignOut}
              style={({ pressed }) => [
                { backgroundColor: pressed ? Colors.primary : Colors.white },
                styles.wrapperCustom,
              ]}
            >
              <View style={styles.viewItem}>
                <Icon
                  name={"log-out"}
                  type={"feather"}
                  color={Colors.secondary}
                />
                <Text style={styles.textNormal}>Sign Out</Text>
                <Icon
                  name="navigate-next"
                  type="material"
                  color={Colors.secondary}
                />
              </View>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerBar: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
  },
  viewItem: {
    margin: 10,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  coverArea: {
    padding: 20,
    backgroundColor: "#fff",
  },
  textHeader: {
    fontWeight: "bold",
    flex: 0.5,
    color: Colors.secondary,
  },
  textNormal: {
    flex: 0.8,
    color: Colors.secondary,
  },
  imageProfile: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: "center",
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 0,
  },
});
