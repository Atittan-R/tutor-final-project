import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../config/colors'
import { styles } from './styles'

export const Editprofile = (props) => {
    const [modalVisible, setModalVisible] = props.modalVisible
    const [name, setname] = useState(props.profile.name)
    const [major, setmajor] = useState(props.profile.major)
    const [tel, settel] = useState(props.profile.tel)
    const [email, setemail] = useState(props.profile.email)
    const [Profile, setProfile] = props.ProfileUser
    const User = { name: "", major: "", tel: "", email: "" }
    const save = (name, major, tel, email) => {
        User.name = name
        User.major = major
        User.tel = tel
        User.email = email
        console.log(User)
        setProfile([...[], User])
        setModalVisible(!modalVisible);
    }
    const close=()=>{
        setname(props.profile.name)
        setmajor(props.profile.major)
        settel(props.profile.tel)
        setemail(props.profile.email)
        setModalVisible(!modalVisible);
    }

    return (

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
                            borderBottomColor: colors.second,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            alignItems: "center"
                        }}>
                        <Text style={{ fontWeight: "bold" }}>Edit Profile</Text>

                    </View>
                    <View>
                        <View style={styles.modalViewText}>
                            <Text style={styles.inputStyleHeard}>Name</Text>
                            <TextInput  value={name} onChangeText={text => setname(text)} style={styles.inputStyle} />
                        </View>
                        <View style={styles.modalViewText}>
                            <Text style={styles.inputStyleHeard}>Major</Text>
                            <TextInput  value={major} onChangeText={text => setmajor(text)} style={styles.inputStyle}/>
                        </View>
                        <View style={styles.modalViewText}>
                            <Text style={styles.inputStyleHeard}>Tel</Text>
                            <TextInput  value={tel} onChangeText={text => settel(text)} style={styles.inputStyle}/>
                        </View>
                       
                        <View style={styles.modalViewText}>
                            <Text style={styles.inputStyleHeard}>Email</Text>
                            <TextInput  value={email} onChangeText={text => setemail(text)} style={styles.inputStyle}/>
                        </View>
                        
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableHighlight
                            style={[styles.closeButton, { margin: 20, paddingHorizontal: 25 }]}
                            onPress={() => {
                                save(name, major, tel, email);
                            }}>
                            <Text style={styles.textStyle}>Save</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={[styles.closeButton, { margin: 20 }]}
                            onPress={() => {
                                close();
                            }}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
        </Modal>
    )
}
