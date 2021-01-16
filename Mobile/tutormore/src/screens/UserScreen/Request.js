import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import Clock from '../../components/forms/Clock';
import ModalDate from '../../components/forms/ModalDate';
import TextInputButton from '../../components/forms/TextInputButton';
import Colors from '../../configs/Colors'

export default function Request({ navigation }) {
    const [coureName, setCourseName] = useState("");
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
            <View style={styles.area}>
                <View style={styles.content}>
                    <TextInputButton
                        label="Course"
                        placeholder="Enter your course name"
                        onChangeText={setCourseName} />
                    <ModalDate />
                    <Clock label="Time Start" />
                    <Clock label="Time End" />
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
        flex: 0.4,
        paddingHorizontal: 10,
    },
})