import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import Clock from '../../components/forms/Clock';
import ModalDate from '../../components/forms/ModalDate';
import TextInputButton from '../../components/forms/TextInputButton';
import Colors from '../../configs/Colors'
import Catagory from '../../components/forms/Catagory';
import Tag from '../../components/forms/Tag';

export default function Request({ navigation }) {
    const [coureName, setCourseName] = useState("");
    const [description, setDescription] = useState("");
    const [catagory, setCatagory] = useState("");
    const [tag, setTags] = useState([]);
    useEffect(() => {
        console.log('====================================');
        console.log("des " + description);
        console.log("cat " + catagory);
        console.log("tag " + tag);
        console.log('====================================');
    }, [description, catagory, tag])
    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <Text style={styles.textHeader}>Create Request</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Feed")}>
                    <Icon name="check" type="material" color={Colors.secondary} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.area}>
                <TextInputButton
                    label="Course"
                    placeholder="Enter your course name"
                    onChangeText={setCourseName} />
                <ModalDate />
                <Clock label="Time Start" />
                <Clock label="Time End" />
                <TextInputButton
                    label="Description"
                    placeholder="Enter your description"
                    onChangeText={(text) => setDescription(text)} />
                <Catagory
                    selectedValue={catagory}
                    onValueChange={(text) => setCatagory(text)} />
                <Tag
                    onChangeTags={(tags) => setTags(tags)} />
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.primary
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.secondary,
    },
    area: {
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
    },
    viewItem: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Colors.white,
        flex: 1,
    },
    textInput: {
        backgroundColor: Colors.background,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 0.8,
    },

})