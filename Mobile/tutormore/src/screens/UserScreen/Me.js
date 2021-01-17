import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Alert,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'
import {Icon} from 'react-native-elements';
import Editprofile from '../../components/forms/Editprofile';
import Colors from '../../configs/Colors';
import {useGlobalVar} from "../../context/GlobalContex";
import API from "../../services/API";

export default function Me({navigation}) {
    const {auth, authentication} = useGlobalVar();
    const [state, dispatch] = authentication;
    const [modalVisible, setModalVisible] = useState(false);
    const [Profile, setProfile] = useState([
        { username: "Pixels", major: "Information of Technology", phonenumber: "091246810", email: "pixels00z@mail.com" }])

    const alertSignOut = () => {
        Alert.alert(
            "Sign out",
            "Are you sure you want to sign out?",
            [
                {text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
                {text: "OK", onPress: () => auth.signOut()}],
            {cancelable: false}
        )
    }
    console.log("state",state.userData)
    return (
        <>
            <ScrollView style={{backgroundColor: Colors.background}}>
                <SafeAreaView style={styles.contrainer}>
                    {Profile.map((i) => {
                        return (
                            <View style={styles.coverArea}>
                                <View style={styles.coverArea}>
                                    <Image
                                        source={require("../../assets/profile.jpg")}
                                        style={styles.imageProfile}
                                    />
                                </View>

                                <View style={styles.viewItem}>
                                    <Text style={styles.textHeader}>Name</Text>
                                    <Text style={styles.textNormal}>{i.username}</Text>
                                </View>
                                <View style={styles.viewItem}>
                                    <Text style={styles.textHeader}>Major</Text>
                                    <Text style={styles.textNormal}>{i.major}</Text>
                                </View>
                                <View style={styles.viewItem}>
                                    <Text style={styles.textHeader}>Tel.</Text>
                                    <Text style={styles.textNormal}>{i.phonenumber}</Text>
                                </View>
                                <View style={styles.viewItem}>
                                    <Text style={styles.textHeader}>Email</Text>
                                    <Text style={styles.textNormal}>{i.email}</Text>
                                </View>
                                <Editprofile modalVisible={[modalVisible, setModalVisible]} profile={i}
                                             ProfileUser={[Profile, setProfile]}/>
                            </View>
                        )
                    })
                    }

                    <View style={{padding: 5}}></View>

                    <View style={styles.coverArea}>
                        <Pressable
                            onPress={() => navigation.navigate("Feed", {name: "Request"})}
                            // onPress={() => _retrieveData}
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed ? Colors.primary : Colors.white,
                                },
                                styles.wrapperCustom,
                            ]}
                        >
                            <View style={styles.viewItem}>
                                <Icon name="add-task" type="material" color={Colors.secondary}/>
                                <Text style={styles.textNormal}>Request</Text>
                                <Icon name="navigate-next" type="material" color={Colors.secondary}
                                />
                            </View>
                        </Pressable>
                        <Pressable
                            key={"home"}
                            onPress={() => navigation.navigate("Home", {name: "MyCourse"})}
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed ? Colors.primary : Colors.white,
                                },
                                styles.wrapperCustom,
                            ]}
                        >
                            <View style={styles.viewItem}>
                                <Icon name="menu-book" type="material" color={Colors.secondary}/>
                                <Text style={styles.textNormal}>My Course</Text>
                                <Icon name="navigate-next" type="material" color={Colors.secondary}/>
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                setModalVisible(true)
                            }}

                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed ? Colors.primary : Colors.white,
                                },
                                styles.wrapperCustom,
                            ]}
                        >
                            <View style={styles.viewItem}>
                                <Icon name="edit" type="material" color={Colors.secondary}/>
                                <Text style={styles.textNormal}>Edit Profile</Text>
                                <Icon name="navigate-next" type="material" color={Colors.secondary}/>
                            </View>
                        </Pressable>
                    </View>

                    <View style={{padding: 5}}></View>

                    <View style={styles.coverArea}>
                        <Pressable
                            onPress={alertSignOut}
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed ? Colors.primary : Colors.white,
                                },
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
                                <Icon name="navigate-next" type="material" color={Colors.secondary}/>
                            </View>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )
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
        backgroundColor: Colors.primary
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
        fontSize: 20,
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

})