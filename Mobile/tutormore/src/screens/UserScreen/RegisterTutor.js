import React, {useState} from "react";
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
import {Icon} from "react-native-elements";
import Colors from "../../configs/Colors";
import TextInputButton from "../../components/forms/TextInputButton";
import Calendar from "../../components/forms/Calendar";
import CheckBox from "@react-native-community/checkbox";
import Experience from "../../components/forms/Experience";
import API from "../../services/API";
import {useGlobalVar} from "../../context/GlobalContex";

export default function ResgisterTutor({navigation}) {
    const {authentication} = useGlobalVar();
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

    const alertEnroll = () => {
        Alert.alert(
            "Enroll",
            "Are you sure to enroll?",
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
            {cancelable: false}
        );
    };

    const signupTutor = async () => {
        try {
            // console.log("Hello", firstname,email,surname, phoneNumber,major,birthDath.getDate(),experience)
            const response = await API.post("/tutor/signup/" + currentUser.id, {
                firstname: firstname,
                email: email,
                lastname: surname,
                major: major,
                phoneNumber: phoneNumber,
                dob: birthDath,
                exp: experience,
                lineId: lineId,
            });
            ToastAndroid.show(response.data.message, ToastAndroid.LONG);
            navigation.navigate("RoleSelect");
        } catch (e) {

        }
    }


    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container}/>
            <View style={styles.headerBar}>
                <TouchableOpacity
                    style={{color: Colors.secondary, marginRight: 10}}
                    onPress={() => navigation.pop()}
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
            <ScrollView style={{backgroundColor: Colors.white, flex: 0}}>
                <View style={styles.barTitle}>
                    <Text style={{marginLeft: 20, fontWeight: "bold", fontSize: 16, color: Colors.secondary}}>
                        Personal Information
                    </Text>
                </View>
                <View style={styles.view}>
                    <TextInputButton
                        label={"Name"}
                        placeholder={"Enter your name"}
                        onTextChange={(text) => setFirstname(text)}/>
                    <TextInputButton
                        label={"Surname"}
                        placeholder={"Enter your surname"}
                        onTextChange={(text) => setSurname(text)}/>
                    <Calendar
                        label={"Date of Birth"}
                        callback={getBirthDate}
                        claerdate={[claerdate, setClaerDate]}/>
                    <TextInputButton
                        label={"Phone Number"}
                        placeholder={"Enter your phone number"}
                        onTextChange={(text) => setPhoneNumber(text)}
                        keyboardType={"phone-pad"}/>
                    <TextInputButton
                        label={"Line ID"}
                        placeholder={"Enter your line id"}
                        onTextChange={(text) => setLineId(text)}
                        keyboardType={"email-address"}/>
                    <TextInputButton
                        label={"Email"}
                        placeholder={"Enter your email"}
                        // value={email}
                        onTextChange={(text) => setEmail(text)}
                        keyboardType={"email-address"}/>
                    <TextInputButton
                        label={"Major"}
                        placeholder={"Enter your major"}
                        // value={major}
                        onTextChange={(text) => setMajor(text)}/>
                    <Experience
                        selectedValue={experience}
                        onValueChange={(text) => setExperience(text)}/>
                </View>

                <TouchableOpacity style={styles.button} onPress={alertEnroll}>
                    <Text style={styles.title}>Submit</Text>
                </TouchableOpacity>
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
});
