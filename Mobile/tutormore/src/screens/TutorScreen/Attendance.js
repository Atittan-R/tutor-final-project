import React, { useEffect, useState } from 'react'
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

export default function Attendance({ navigation, route }) {
    // const { id } = params.id;
    const { date,data } = route.params;
    // const data = [
    //     { id: 1, name: "Kinkaku" },
    //     { id: 2, name: "Inostuke" },
    //     { id: 3, name: "Mamoru" },
    //     { id: 4, name: "Ryuji" },
    //     { id: 5, name: "Lie" },
    // ]
    console.log("data: ",data);
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
                    <Text style={styles.textHeader} numberOfLines={1}>{date}</Text>
                </View>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity>
                        <View style={styles.card}>
                            <Text style={styles.title}>{item.username}</Text>
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
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0.5,
    },
    add: {
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    view: {
        backgroundColor: Colors.white,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 0.5,
    },
    date: {
        marginLeft: 10,
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.secondary,

    },

})