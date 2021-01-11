import React, { useState } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    StyleSheet,
    StatusBar
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from '../../config/colors';
import { Clock } from "./Clock";
import { ModalDate } from "./ModalDate";
import { TextInputButton } from './TextInputButton';

export const CreateRequest = (props) => {
    const [valueText, setValueText] = useState();
    const [dateStart, setDateStart] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [show, setShow] = useState(false);
    const [days, setDays] = useState(["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat ", "Everyday"]);
    const [everyday, setEveryday] = useState(false);
    const [monday, setMonday] = useState(false);
    const [tuesday, setTuesday] = useState(false);
    const [wednesday, setWednesday] = useState(false);
    const [thursday, setThursday] = useState(false);
    const [friday, setFriday] = useState(false);
    const [saturday, setSaturday] = useState(false);
    const [sunday, setSunday] = useState(false);

    const [allValue, setAllValue] = props.allValue;
    const request = () => {
        const arrData = {
            course: "",
            date: "",
            timeStart: "",
            timeEnd: ""
        };
        arrData.course = valueText;
        arrData.date = days;
        arrData.timeStart = dateStart.getHours() + ":" + dateStart.getMinutes();
        arrData.timeEnd = dateEnd.getHours() + ":" + dateEnd.getMinutes();
        setAllValue([...allValue, arrData]);
    }

    return (
        <View style={styles.contrainer}>
            <TextInputButton label={"Course"} valueText={[valueText, setValueText]} />
            <ModalDate
                day={[days, setDays]}
                everyday={[everyday, setEveryday]}
                sunday={[sunday, setSunday]}
                monday={[monday, setMonday]}
                tuesday={[tuesday, setTuesday]}
                wednesday={[wednesday, setWednesday]}
                thursday={[thursday, setThursday]}
                friday={[friday, setFriday]}
                saturday={[saturday, setSaturday]}
            />
            <Clock label={"Time Start"}
                time={[dateStart, setDateStart]} show={[show, setShow]}
            />
            <Clock label={"Time End"}
                time={[dateEnd, setDateEnd]} show={[show, setShow]}
            />

            <View style={styles.inputItem2}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => request()}
                >
                    <Text style={{ alignSelf: "center", color: colors.second }}>Request</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    inputItem: {
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
    inputItem2: {
        margin: 5,
        alignItems: "stretch",
    },
    Global: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#fff",
    },
    textInput: {
        backgroundColor: colors.background,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 0.8,
    },
    buttonStyle: {
        backgroundColor: colors.primary,
        borderRadius: 30,
        paddingVertical: 10,
        elevation: 2
    }
});