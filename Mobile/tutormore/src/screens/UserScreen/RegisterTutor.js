import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../configs/Colors";
import TextInputButton from "../../components/forms/TextInputButton";
import Calendar from "../../components/forms/Calendar";
import CheckBox from "@react-native-community/checkbox";
import Experience from "../../components/forms/Experience";

export default function ResgisterTutor({ navigation }) {
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

    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <TouchableOpacity
                    style={{ color: Colors.secondary, marginRight: 10 }}
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
            <ScrollView style={{ backgroundColor: Colors.white, flex: 0 }}>
                <View style={styles.barTitle}>
                    <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 16, color: Colors.secondary }}>
                        Personal Information
                        </Text>
                </View>
                <View style={styles.view}>
                    <TextInputButton
                        label={"Name"}
                        placeholder={"Enter your name"}
                        value={firstname}
                        onChangeText={(text) => setFirstname(text)} />
                    <TextInputButton
                        label={"Surname"}
                        placeholder={"Enter your surname"}
                        value={surname}
                        onChangeText={(text) => setSurname(text)} />
                    <Calendar
                        label={"Date of Birth"}
                        callback={getBirthDate}
                        claerdate={[claerdate, setClaerDate]} />
                    <TextInputButton
                        label={"Phone Number"}
                        placeholder={"Enter your phone number"}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        keyboardType={"phone-pad"} />
                    <TextInputButton
                        label={"Line ID"}
                        placeholder={"Enter your line id"}
                        value={lineId}
                        onChangeText={(text) => setLineId(text)}
                        keyboardType={"email-address"} />
                    <TextInputButton
                        label={"Email"}
                        placeholder={"Enter your email"}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType={"email-address"} />
                    <TextInputButton
                        label={"Major"}
                        placeholder={"Enter your major"}
                        value={major}
                        onChangeText={(text) => setMajor(text)} />
                    <Experience
                        selectedValue={experience}
                        onValueChange={(text) => setExperience(text)} />
                </View>
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
