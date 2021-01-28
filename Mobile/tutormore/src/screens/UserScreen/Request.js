import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Clock from '../../components/forms/Clock';
import ModalDate from '../../components/forms/ModalDate';
import TextInputButton from '../../components/forms/TextInputButton';
import Colors from '../../configs/Colors'
import Catagory from '../../components/forms/Catagory';
import Tag from '../../components/forms/Tag';
import API from "../../services/API"
import { useGlobalVar } from "../../context/GlobalContex";

export default function Request({ navigation }) {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;
    const current = state.userData;
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

            if (!CourseName.trim()) { alert('Please enter course name'); return; }
            if (!day.trim()) { alert('Please set the day'); return; }
            if (catagory === null) { await alert('Please select Catagory'); return; }
            const start = (TimeStart.getHours() * 60) + TimeStart.getMinutes();
            const end = (TimeEnd.getHours() * 60) + TimeEnd.getMinutes();
            const sum = end - start;
            if (sum <= 60) { alert('Please set time correctly, at least 60 minutes away.'); return; }

            const requst = await API.post("request/create", {
                name: CourseName,
                date: day.toString(),
                time_start: TimeStart.getHours() + ":" + TimeStart.getMinutes(),
                time_end: TimeEnd.getHours() + ":" + TimeEnd.getMinutes(),
                description: Description,
                categoryId: catagory,
                userId: current.id,
                tagname: tags

            });
            console.log(requst.data);
            console.log('====================================');
            clear()
            navigation.navigate("Feed", {
                name: "Feed", onGoBack: () => {
                    fetchData()
                }
            })

        } catch (error) {
            if (error.response.status === 404) {
                clear();
                navigation.navigate("Feed", { name: "Feed", onGoBack: () => onRefreshh() })
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

    useEffect(() => {
        console.log("CourseName :", CourseName);
        console.log("day :", day);
        console.log("Tags :", tags);
        console.log("start " + TimeStart.getHours());
        console.log("end " + TimeEnd.getHours());
        console.log("cat " + catagory);
    }, [CourseName, tags, TimeStart.getHours(), TimeEnd.getHours(), catagory])

    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <Text style={styles.textHeader}>Create Request</Text>
            </View>
            <ScrollView style={styles.area}>
                <View style={styles.content}>
                    <TextInputButton placeholder="Course" value={CourseName}
                        onTextChange={(text) => setCourseName(text)} />
                    <TextInputButton
                        placeholder="Description"
                        onTextChange={(text) => setDescription(text)} value={Description} />
                    <ModalDate dayValue={[day, setDay]} />
                    <Clock name="Time Start" callback={getTimeStart} claerdate={[claerdate, setClaerDate]} />
                    <Clock name="Time End" callback={getTimeEnd} claerdate={[claerdate, setClaerDate]} />
                </View>
                <Catagory
                    selectedValue={catagory}
                    onValueChange={(text) => setCatagory(text)} />
                <Tag
                    onChangeTags={(tags) => setTags(tags)} value={[tags, setTags]} claerTag={[claerTag, setClaerTag]} />
                <TouchableOpacity style={styles.button} onPress={() => creteRequst()}>
                    <Text style={styles.title}>Submit</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: 10 }} />
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
    button: {
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: Colors.primary,
        borderRadius: 30,
        marginTop: 10,
        paddingVertical: 10,
        elevation: 2,
    },
})
