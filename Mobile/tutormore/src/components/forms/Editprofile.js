import React, {useEffect, useState} from 'react'
import {Image, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import Colors from '../../configs/Colors'
import API from '../../services/API'
import {useGlobalVar} from "../../context/GlobalContex";
import Catagory from './Catagory'
import avatars from "../../configs/avatars";
import {SwipeablePanel} from "rn-swipeable-panel";

export default function Editprofile(props) {
    const {authentication} = useGlobalVar();
    const [state, dipatch] = authentication
    const currentUser = JSON.parse(state.userData);
    const [modalVisible, setModalVisible] = props.modalVisible
    const [Profile, setProfile] = props.ProfileUser;
    const [name, setname] = props.name
    const [major, setmajor] = props.major
    const [tel, settel] = props.tel
    const [email, setemail] = props.email
    const [avatar, setAvatar] = props.avatar
    const [isPanelActive, setIsPanelActive] = props.setIsPanelActive;

    // const User = { name: "", major: "", tel: "", email: "" }
    const Edit = async () => {
        try {
            const edit = await API.post("/edit/profile", {
                username: name,
                major: major,
                phonenumber: tel,
                email: email,
                id: currentUser.id
            })

            console.log(edit.data);
        } catch (error) {
            console.log(error);
        }
    }
    const save = (name, major, tel, email,avatar) => {
        Edit()
        Profile.name = name
        Profile.major = major
        Profile.phonenumber = tel
        Profile.email = email
        Profile.avatar = avatar
        setProfile(Profile)
        console.log(Profile)
        // setProfile([...[], User])
        setModalVisible(!modalVisible);
    }

    const close = () => {
        setname(Profile.username)
        setmajor(Profile.major)
        settel(Profile.phonenumber)
        setemail(Profile.email)
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View
                            style={{
                                paddingVertical: 10,
                                borderBottomColor: Colors.secondary,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                alignItems: "center"
                            }}>
                            <Text style={{fontWeight: "bold"}}>Edit Profile</Text>

                        </View>
                        <View>
                            <View style={styles.modalViewText}>
                                <Text style={styles.inputStyleHeard}>Name</Text>
                                <TextInput value={name} onChangeText={text => setname(text)} style={styles.inputStyle}/>
                            </View>
                            <View style={[styles.modalViewText, {height: 40, marginVertical: 5}]}>
                                <Text style={styles.inputStyleHeard}>Major</Text>
                                <Catagory
                                    selectedValue={major}
                                    onValueChange={(itemValue, itemIndex) => setmajor(itemValue)}
                                />
                            </View>
                            <View style={styles.modalViewText}>
                                <Text style={styles.inputStyleHeard}>Tel</Text>
                                <TextInput value={tel} onChangeText={text => settel(text)} style={styles.inputStyle}/>
                            </View>

                            <View style={styles.modalViewText}>
                                <Text style={styles.inputStyleHeard}>Email</Text>
                                <TextInput value={email} onChangeText={text => setemail(text)}
                                           style={styles.inputStyle}/>
                            </View>

                        </View>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <TouchableHighlight
                                style={[styles.closeButton, {margin: 20, paddingHorizontal: 25}]}
                                onPress={() => {
                                    save(name, major, tel, email);
                                }}>
                                <Text style={styles.textStyle}>Save</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[styles.closeButton, {margin: 20}]}
                                onPress={() => {
                                    close();
                                }}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>

        </>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        marginHorizontal: 20,
    },
    modalView: {
        margin: 0,
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 20,
        alignItems: "stretch",
        elevation: 2,
    },
    closeButton: {
        backgroundColor: Colors.primary,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        textAlign: "center"
    },
    modalViewText: {
        margin: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    inputStyleHeard: {
        fontWeight: "bold",
        marginLeft: 20,
        flex: 0.25,
        color: Colors.secondary,
    },
    inputStyle: {
        marginLeft: 20,
        flex: 1,
        color: Colors.secondary,
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
})