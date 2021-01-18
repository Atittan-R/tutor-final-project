import React, { useState } from 'react'
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Amount from '../../components/forms/Amount';
import Catagory from '../../components/forms/Catagory';
import Clock from '../../components/forms/Clock';
import Location from '../../components/forms/Location';
import ModalDate from '../../components/forms/ModalDate';
import Tag from '../../components/forms/Tag';
import TermCourse from '../../components/forms/TermCourse';
import TextInputButton from '../../components/forms/TextInputButton';
import UploadImage from '../../components/forms/UploadImage';
import Colors from '../../configs/Colors'


export default function CreateCourse({ navigation }) {
    const [coureName, setCourseName] = useState("");
    const [amount, setAmount] = useState("");
    const [catagory, setCatagory] = useState("");

    //TODO
    const [TimeStart, setTimeStart] = useState(new Date(0, 0, 0, 0));
    const [TimeEnd, setTimeEnd] = useState(new Date(0, 0, 0, 0))
    const [day, setDay] = useState("")
    const [claerdate, setClaerDate] = useState(false);
    const [tags, setTags] = useState([])
    const [claerTag, setClaerTag] = useState(false)

    //TODO
    const getTimeStart = (result) => {
        setTimeStart(result);
    }
    const getTimeEnd = (result) => {
        setTimeEnd(result);
    }


    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <Text style={styles.textHeader}>Create Course</Text>
                <TouchableOpacity
                    onPress={() => navigation.push("CourseDetail")}>
                    <Icon name="check" type="material" color={Colors.secondary} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.area}>
                <View style={styles.content}>
                    <UploadImage />
                    <TextInputButton
                        label={"Course"}
                        placeholder={"Enter your course name"}
                        onChangeText={(text) => setCourseName(text)} />
                    <ModalDate dayValue={[day, setDay]} />
                    <Clock label="Time Start" name="Time Start" callback={getTimeStart} claerdate={[claerdate, setClaerDate]} />
                    <Clock label="Time End" name="Time End" callback={getTimeEnd} claerdate={[claerdate, setClaerDate]} />
                    <TermCourse />
                    <TextInputButton
                        label={"Amount"}
                        placeholder={"Enter the number of seats"}
                        onChangeText={(text) =>setAmount(text)}
                        keyboardType={"phone-pad"} />
                    <Catagory
                        selectedValue={catagory}
                        onValueChange={(itemValue, itemIndex) => setCatagory(itemValue)} />
                    <Tag
                        onChangeTags={(tags) => setTags(tags)} value={[tags, setTags]} claerTag={[claerTag, setClaerTag]} />
                    <Location />
                </View>
            </ScrollView >
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
        flex: 1,
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
    content: {
        flex: 1,
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: "bold",
        color: Colors.secondary
    },

})