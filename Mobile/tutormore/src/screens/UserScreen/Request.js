import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import Clock from '../../components/forms/Clock';
import ModalDate from '../../components/forms/ModalDate';
import TextInputButton from '../../components/forms/TextInputButton';
import Colors from '../../configs/Colors'
import API from "../../services/API"

export default function Request({ navigation }) {
    const [valueText, setValueText] = useState();
    const [CourseName,setCourseName]=useState("");
    const [day,setDay]=useState("");
    const [TimeStart, setTimeStart] = useState(new Date());
    const [TimeEnd, setTimeEnd] = useState(new Date())


    const getTimeStart=(result)=>{
        setTimeStart(result);
    }
    const getTimeEnd=(result)=>{
        setTimeEnd(result);
    }

    const creteRequst=async()=>{

        try {
            var d = new Date()
            const requst =  await API.post("request/create", {
                name: CourseName,
                date: day.toString(),
                time_start: TimeStart.getHours()+":"+TimeStart.getMinutes(),
                time_end: TimeEnd.getHours()+":"+TimeEnd.getMinutes(),
                description:"xxxxxxx",
                categoryId:1,
                userId:2
            });
            console.log('====================================');
            console.log(requst.data);
            console.log('====================================');
        } catch (error) {
            error.response.status=404 ?  navigation.navigate("Feed")
            :
            console.log('====================================');
            console.log("ERR: ",error.response.status);
            console.log('====================================');

        }
    }

// useEffect(() => {
//  console.log("CourseName :",CourseName);
//  console.log("day :",day);
// }, [CourseName])
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
                    onPress={() =>   navigation.push("Feed")}>
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
            <View style={styles.area}>
                <View style={styles.content}>
                    <TextInputButton label="Course" placeholder="Enter your course name"
                      onTextChange={(text) => setCourseName(text)}/>
                    <ModalDate dayValue={[day,setDay]}/>
                    <Clock label="Time Start" name="Time Start" callback={getTimeStart}/>
                    <Clock label="Time End"  name="Time End" callback={getTimeEnd}/>
                </View>
            </View>

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
    backgroundColor: Colors.primary,
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
    flex: 0.4,
    paddingHorizontal: 10,
  },
});
