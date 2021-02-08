import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import Editprofile from "../../components/forms/Editprofile";
import Colors from "../../configs/Colors";
import { useGlobalVar } from "../../context/GlobalContex";
import API from "../../services/API";
import avatars from "../../configs/avatars";
import categories from "../../configs/categories";
import {SwipeablePanel} from "rn-swipeable-panel";
import LoadingScreen from "../../components/Loading";

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
  const [requireImage, setRequireImage] = useState(0);
  const [avatar, setAvatar] = useState(0);
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => setIsPanelActive(false),
    onPressCloseButton: () => setIsPanelActive(false),
  });

  const changeImage = (avatarId) => {
    //Set Image to Frontend
    setRequireImage(avatarId);
  }

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

  const updateAvatar = async (newAvatar) =>{
    console.log(newAvatar)
    try {
      const edit = await API.post("/edit/profile", {
        id:  user.id,
        avatar: newAvatar,
      })
      await setIsPanelActive(false)
      await getUser();
      setRequireImage(0);
      console.log(edit.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getUser = async () => {
    setLoading(true);
    try{
      const response = await API.get("/user/findProfile/" + user.id)
      const data = await response.data.user
      setProfile(data)
      setLoading(false)
    }catch (e) {
      alert(e.response.message)
    }

  }

  useEffect(() => {
    navigation.addListener("focus", () => {
      getUser();
    });
  },[]);



  useEffect(() => {
    setname(Profile.username)
    setmajor(Profile.major)
    settel(Profile.phonenumber)
    setemail(Profile.email)
    setAvatar(Profile.avatar)
}, [Profile])

  return (
    <>
      <ScrollView style={{ backgroundColor: Colors.background }}>
          { loading? <LoadingScreen/>:
        <SafeAreaView>
          <View style={styles.coverArea}>
            <TouchableOpacity style={styles.coverArea} onPress={() => setIsPanelActive(true)}>
              <Image source={avatars[Profile.avatar].image} style={styles.imageProfile} />
              <Text style={styles.text}>Change image</Text>
            </TouchableOpacity>
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
              avatar={[avatar,setAvatar]}
              modalVisible={[modalVisible, setModalVisible]}
              setIsPanelActive={[isPanelActive, setIsPanelActive]}
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
              }
      </ScrollView>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <View style={styles.row}>
          <View style={{alignItems:"center"}}>
            <Text style={{textAlign: "center",marginBottom: 20,}}>Select your image</Text>
            <Image source={avatars[requireImage].image} style={styles.imageChange}/>
          </View>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => changeImage(1)}>
            <Image source={avatars[1].image} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(2)}>
            <Image source={avatars[2].image} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(3)}>
            <Image source={avatars[3].image} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(4)}>
            <Image source={avatars[4].image} style={styles.image}/>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => changeImage(5)}>
            <Image source={avatars[5].image}
                   style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(6)}>
            <Image source={avatars[6].image} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(7)}>
            <Image source={avatars[7].image} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(8)}>
            <Image source={avatars[8].image} style={styles.image}/>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => changeImage(9)}>
            <Image source={avatars[9].image} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(10)}>
            <Image source={avatars[10].image} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(11)}>
            <Image source={avatars[11].image} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(12)}>
            <Image source={avatars[12].image} style={styles.image}/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => updateAvatar(requireImage)} style={{backgroundColor: Colors.primary, padding: 15, margin: 20, borderRadius: 20}}>
            <Text style={{textAlign: "center"}}>Save</Text>
          </TouchableOpacity>
        </View>
      </SwipeablePanel>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  icon:{
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
  imageTitle: {
    width: 120,
    height: 120,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center"
  },
  text: {
    color: Colors.gray,
    alignSelf: "center",
    // fontWeight: "bold"
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 10,
    marginTop: 15
  },
  imageChange:{
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  }
});
