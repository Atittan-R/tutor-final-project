import React, { useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import Colors from '../../configs/Colors';
import courseAvatars from '../../configs/avatars';

export default function Matching({ navigation }) {

    const course = [
        { id: "1", name: "Android" },
        { id: "2", name: "IOS" },
        { id: "3", name: "React" },
        { id: "4", name: "Node JS" },
        { id: "5", name: "Java" },
        { id: "6", name: "PHP" },
        { id: "7", name: "Javascript" },

    ];

    return (
        <>
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <Text style={styles.textHeader}>Matching</Text>
            </View>

            <View style={styles.line} />
            <View style={[styles.topic, styles.row]}>
                <View style={styles.box} />
                <Text style={styles.textRec}>Course</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={course}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", { course: item.id })}>
                        <View style={
                            {
                                backgroundColor: "#fff",
                                padding: 5,
                                flexDirection: "row",
                                marginHorizontal: 2,
                                flexWrap: "wrap",
                                marginBottom: 1
                            }}>
                            <Image source={{ uri: "https://source.unsplash.com/random" }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                            <View style={{ flex: 1, marginLeft: 10, justifyContent: "flex-start", alignItems: "flex-start" }} >
                                <Text style={styles.textTitle}>{item.name}</Text>
                                <Text numberOfLines={1} style={{
                                    color: "gray",
                                    fontSize: 12,
                                }}>{item.description}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <Rating imageSize={15} startingValue={item.rate} ractions={5} ratingCount={1} />
                                    <Text style={[styles.textBody, { marginHorizontal: 5 }]}>{item.rate}</Text>
                                    <Icon name="schedule" type="material" color={Colors.secondary} size={15} />
                                    <Text style={[styles.textBody, { marginHorizontal: 5, }]}>{item.time_start} {item.time_end}</Text>
                                    <Icon name="calendar-today" type="material" color={Colors.secondary} size={15} />
                                    <Text style={[styles.textBody, { marginHorizontal: 5 }]}>{item.date}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                } />
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
    line: {
        marginVertical: 10,
        marginHorizontal: 8,
        paddingVertical: 0.4,
        backgroundColor: Colors.gray,
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    box: {
        marginTop: -10,
        marginLeft: 8,
        paddingVertical: 1,
        paddingHorizontal: 2.5,
        borderRadius: 30,
        backgroundColor: Colors.primary,
    },
    topic: {
        flex: 1,
        marginBottom: 10,
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