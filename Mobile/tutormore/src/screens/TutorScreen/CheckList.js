import React, { useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { Icon } from 'react-native-elements'
import Colors from '../../configs/Colors'

export default function CheckList({ navigation, route }) {
    const { id, course } = route.params;
    const data = [
        { id: 1, date: "Mon 11 Jan 2021" },
        { id: 2, date: "Tue 12 Jan 2021" },
        { id: 3, date: "Wed 13 Jan 2021" },
        { id: 4, date: "Thu 14 Jan 2021" },
        { id: 5, date: "Fri 15 Jan 2021" },
        { id: 1, date: "Mon 11 Jan 2021" },
        { id: 2, date: "Tue 12 Jan 2021" },
        { id: 3, date: "Wed 13 Jan 2021" },
        { id: 4, date: "Thu 14 Jan 2021" },
        { id: 5, date: "Fri 15 Jan 2021" },
        { id: 1, date: "Mon 11 Jan 2021" },
        { id: 2, date: "Tue 12 Jan 2021" },
        { id: 3, date: "Wed 13 Jan 2021" },
        { id: 4, date: "Thu 14 Jan 2021" },
        { id: 5, date: "Fri 15 Jan 2021" },

    ];

    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.space}>
                <View style={styles.headerBar}>
                    <TouchableOpacity
                        style={{ color: Colors.secondary, marginRight: 10 }}
                        onPress={() => navigation.pop()}>
                        <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader} numberOfLines={1}>{course}</Text>
                </View>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => navigation.push("Attendance", { id: item.id, date: item.date })}
                    >
                        <View style={styles.card}>
                            <Text style={styles.title}>{item.date}</Text>
                            <Icon name="navigate-next" type="material" color={Colors.secondary} />
                        </View>
                    </TouchableOpacity>
                }
            />
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerBar: {
        flexDirection: "row",
        justifyContent: "flex-start",
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
    space: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    card: {
        padding: 10,
        flexDirection: "row",
        marginHorizontal: 2,
        flexWrap: "wrap",
        backgroundColor: Colors.white,
        justifyContent: "space-between",
        borderBottomColor: Colors.primary,
        borderTopColor: Colors.primary,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    add: {
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center"
    },
})