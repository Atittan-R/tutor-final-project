import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import Clock from '../../components/forms/Clock';
import ModalDate from '../../components/forms/ModalDate';
import TextInputButton from '../../components/forms/TextInputButton';
import Colors from '../../configs/Colors'
import Catagory from '../../components/forms/Catagory';
import Tag from '../../components/forms/Tag';


import API from "../../services/API"
import { Directions } from 'react-native-gesture-handler';

export default function Request({ navigation }) {
    const [CourseName, setCourseName] = useState("");
    const [day, setDay] = useState("")
    const [claerdate, setClaerDate] = useState(false);
    const [TimeStart, setTimeStart] = useState(new Date(0, 0, 0, 0));
    const [TimeEnd, setTimeEnd] = useState(new Date(0, 0, 0, 0))
    const [Description, setDescription] = useState("")
    const [catagory, setCatagory] = useState(null)
    const [tags, setTags] = useState([])
    const [claerTag, setClaerTag] = useState(false)


    
    const getTimeStart = (result) => {
        setTimeStart(result);
    }
    const getTimeEnd = (result) => {
        setTimeEnd(result);
    }

    const creteRequst = async () => {

        try {
            var d = new Date()
            console.log(CourseName);
            console.log(day.toString());
            console.log(Description);
            console.log(catagory);
            console.log(tags);
            const requst = await API.post("request/create", {
                name: CourseName,
                date: day.toString(),
                time_start: TimeStart.getHours() + ":" + TimeStart.getMinutes(),
                time_end: TimeEnd.getHours() + ":" + TimeEnd.getMinutes(),
                description: Description,
                categoryId: catagory,
                userId: 2,
                tagname: tags
                ///To Do tag
            });
            console.log('====================================');
            console.log(requst.data);
            console.log('====================================');
            clear()
            navigation.navigate("Feed", { name: "Feed" ,onGoBack: () => onRefreshh()})

        } catch (error) {
            // console.log(error);
            if (error.response.status==404) {
                clear();
                navigation.navigate("Feed", { name: "Feed" ,onGoBack: () => onRefreshh()})
            }
            else {
                console.log('====================================');
                console.log("ERR: ", error.response.status);
                console.log('====================================');

            }

        }
    }
    const clear = () => {
        setCourseName("")
        setClaerTag(true)
        setDay(null)
        setCatagory(null)
        setDescription("")
        // setTags([])
        setTimeEnd(new Date(0, 0, 0, 0))
        setTimeStart(new Date(0, 0, 0, 0))
        setClaerDate(true)
    }

    // useEffect(() => {
    //  console.log("CourseName :",CourseName);
    //  console.log("day :",day);
    //  console.log("Tags :",tags);
    // }, [tags])
    // useEffect(() => {
    //     console.log('=================TimeStart===================');
    //     console.log(TimeStart.getHours()+":"+TimeStart.getMinutes());
    //     console.log('====================================');
    // }, [TimeStart])
    // useEffect(() => {
    //     console.log('=================TimeEnd===================');
    //     console.log(TimeEnd.getHours()+":"+TimeEnd.getMinutes());
    //     console.log('====================================');
    // }, [TimeEnd])
    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <TouchableOpacity
                    style={{ color: Colors.secondary, marginRight: 10 }}
                    onPress={() => navigation.push("Feed")}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Create Request</Text>
                <TouchableOpacity
                    style={styles.add}
                    onPress={() => creteRequst()
                    }>
                    <Icon name="check" type="material" color={Colors.secondary} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.area}>
                <View style={styles.content}>
                    <TextInputButton label="Course" placeholder="Enter your course name" value={CourseName}
                        onTextChange={(text) => setCourseName(text)} />
                    <ModalDate dayValue={[day, setDay]} />
                    <Clock label="Time Start" name="Time Start" callback={getTimeStart} claerdate={[claerdate, setClaerDate]} />
                    <Clock label="Time End" name="Time End" callback={getTimeEnd} claerdate={[claerdate, setClaerDate]} />
                </View>
                <TextInputButton
                    label="Description"
                    placeholder="Enter your description"
                    onTextChange={(text) => setDescription(text)} value={Description} />
                <Catagory
                    selectedValue={catagory}
                    onValueChange={(text) => setCatagory(text)} />
                <Tag
                    onChangeTags={(tags) => setTags(tags)} value={[tags, setTags]} claerTag={[claerTag, setClaerTag]} />
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
