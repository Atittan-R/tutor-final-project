import React, { useState } from "react";
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, ToastAndroid,
    TouchableOpacity,
    View,
} from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../configs/Colors";
import TextInputButton from "../../components/forms/TextInputButton";
import Calendar from "../../components/forms/Calendar";
import CheckBox from "@react-native-community/checkbox";
import Experience from "../../components/forms/Experience";
import API from "../../services/API";
import { useGlobalVar } from "../../context/GlobalContex";
import Catagory from "../../components/forms/Catagory";
import { StackActions } from '@react-navigation/native';
export default function ResgisterTutor({ navigation }) {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;
    const currentUser = JSON.parse(state.userData);

    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [lineId, setLineId] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState('');
    const [birthDath, setBirthDate] = useState(new Date());
    const [experience, setExperience] = useState(null);
    const [claerdate, setClaerDate] = useState(false);
    const getBirthDate = (result) => {
        setBirthDate(result);
    }
    const [catagory, setCatagory] = useState("");
    const alertEnroll = () => {
        Alert.alert(
            "Register",
            "Are you sure to register?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "OK", onPress: async () => {
                        await signupTutor();
                    }
                },
            ],
            { cancelable: false }
        );
    };

    const signupTutor = async () => {
        try {
            // console.log("Hello", firstname,email,surname, phoneNumber,major,birthDath.getDate(),experience)
            const response = await API.post("/tutor/signup/" + currentUser.id, {
                firstname: firstname,
                email: email,
                lastname: surname,
                major: catagory,
                phoneNumber: phoneNumber,
                dob: birthDath,
                exp: experience,
                lineId: lineId
            });
            ToastAndroid.show(response.data.message, ToastAndroid.LONG);
            navigation.navigate("RoleSelect");
        } catch (e) {

        }
    }


    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <TouchableOpacity
                    style={{ color: Colors.secondary, marginRight: 10 }}
                    onPress={() => navigation.dispatch(StackActions.popToTop())}
                >
                    <Icon
                        name="arrow-back-outline"
                        type="ionicon"
                        color={Colors.secondary}
                    />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Tuter Register</Text>
            </View>

            {/* body */}
            <ScrollView style={{ backgroundColor: Colors.white, flex: 0 }}>
                <View style={styles.line} />
                <View style={[styles.topic, styles.row]}>
                    <View style={[styles.column, styles.box]} />
                    <Text style={styles.textRec}>Personal Information</Text>
                </View>
                <View style={styles.view}>
                    <TextInputButton
                        placeholder={"Name"}
                        onTextChange={(text) => setFirstname(text)} />
                    <TextInputButton
                        placeholder={"Surname"}
                        onTextChange={(text) => setSurname(text)} />
                    <Calendar
                        callback={getBirthDate}
                        claerdate={[claerdate, setClaerDate]} />
                    <TextInputButton
                        placeholder={"Phone Number"}
                        onTextChange={(text) => setPhoneNumber(text)}
                        keyboardType={"phone-pad"} />
                    <TextInputButton
                        placeholder={"Line ID"}
                        onTextChange={(text) => setLineId(text)}
                        keyboardType={"email-address"} />
                    <TextInputButton
                        placeholder={"Email"}
                        onTextChange={(text) => setEmail(text)}
                        keyboardType={"email-address"} />
                    {/* <TextInputButton
                        placeholder={"Major"}
                        onTextChange={(text) => setMajor(text)} /> */}
                    <Catagory
                        selectedValue={catagory}
                        onValueChange={(itemValue, itemIndex) => setCatagory(itemIndex)} />
                    <Experience
                        selectedValue={experience}
                        onValueChange={(text) => setExperience(text)} />
                </View>

                <TouchableOpacity style={styles.button} onPress={alertEnroll}>
                    <Text style={styles.title}>Submit</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: 10 }} />
            </ScrollView>
        </>
    );
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
        backgroundColor: Colors.primary,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.secondary,
    },
    barTitle: {
        justifyContent: "flex-start",
        flexDirection: "row",
        backgroundColor: Colors.primary,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    view: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    viewItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
        flex: 1,
    },
    text: {
        color: Colors.secondary,
    },
    title: {
        fontWeight: "bold",
        color: Colors.secondary,
    },
    button: {
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: Colors.primary,
        borderRadius: 30,
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        elevation: 2,
    },
    viewButton: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        // alignItems: "stretch",
        marginTop: 20,
    },
    line: {
        marginVertical: 10,
        marginHorizontal: 8,
        paddingVertical: 0.4,
        backgroundColor: Colors.gray,
    },
    box: {
        marginTop: -10,
        marginLeft: 8,
        paddingVertical: 1,
        paddingHorizontal: 2.5,
        borderRadius: 30,
        backgroundColor: Colors.primary,
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    textRec: {
        flex: 1,
        alignSelf: "center",
        color: Colors.secondary,
        paddingLeft: 5,
        fontSize: 20,
        fontWeight: "bold",
    },
});
