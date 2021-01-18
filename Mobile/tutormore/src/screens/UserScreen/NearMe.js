import React, { useState } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon, Rating } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Colors from '../../configs/Colors';

export default function Search({ navigation }) {

    // search bar
    const [search, setSearch] = useState('');
    const updateSearch = (search) => {
        setSearch({ search });
    };

    const tag = [
        {
            id: "0",
            name: "Computer ",
            description: "จะสอนให้น้องๆ นะครับ ทุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน",
            time: "17.0-21.0",
            date: "Mon Wed Fri",
            tutors: "Pixels",
            rate: 2.2,
            distance: 0.8
        },
        {
            id: "1",
            name: "Computer Programming",
            description:
                "จะสอนให้น้อไม่ดื้อตั้งใจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน เเละเป็นคนหล่อ สวย ทุกคนเลย",
            time: "17.0-21.0",
            date: "Mon Wed Fri",
            tutors: "Pixels",
            rate: 5.0,
            distance: 1.2
        },
        {
            id: "2",
            name: "Data Structure",
            description:
                "จะสอนให้น้องๆ นะครับ ทุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafaweจเเรียน คนหล่อ สวย ทุกคนwefaweafawefawefawefawefawfeweเลย",
            time: "17.0-21.0",
            date: "Mon Wed Fri",
            tutors: "Pixels",
            rate: 3.9,
            distance: 3.5
        },
        {
            id: "3",
            name: "Computer Programming",
            description:
                "จะสอนให้น้องๆ นะครับ ุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน เเละเป็นคนหล่อ สวย ทุกคนเลย",
            time: "17.0-21.0",
            date: "Mon Wed Fri",
            tutors: "Pixels",
            rate: 3.9,
            distance: 2.1
        },
        {
            id: "4",
            name: "Computer Programming",
            description:
                "จะสอนให้น้องๆ นะครับ ุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน เเละเป็นคนหล่อ สวย ทุกคนเลย",
            time: "17.0-21.0",
            date: "Mon Wed Fri",
            tutors: "Pixels",
            rate: 0.5,
            distance: 1.3
        },
        {
            id: "5",
            name: "Computer Programming",
            description:
                "จะสอนให้น้องๆ นะครับ ุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน เเละเป็นคนหล่อ สวย ทุกคนเลย",
            time: "17.0-21.0",
            date: "Mon Wed Fri",
            tutors: "Pixels",
            rate: 3.2,
            distance: 0.5
        },
    ];
    return (
        <>
            <SafeAreaView style={styles.container} />
            <View style={styles.viewItem}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Places near me</Text>
                <Icon name="location-on" type="material" color={Colors.secondary} />
            </View>
            <ScrollView style={styles.view}>
                <View style={styles.line} />
                <View style={[styles.topic, styles.row]}>
                    <View style={styles.box} />
                    <Text style={styles.textRec}>Near Me</Text>
                </View>
                <FlatList
                    data={tag}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity>
                            <View style={
                                {
                                    backgroundColor: "#fff",
                                    padding: 5,
                                    flexDirection: "row",
                                    marginHorizontal: 2,
                                    flexWrap: "wrap"
                                }}>
                                <Image source={{ uri: "https://source.unsplash.com/random" }} style={{ width: 70, height: 70, borderRadius: 5 }} />
                                <View style={{ flex: 1, marginLeft: 10, justifyContent: "flex-start", alignItems: "flex-start" }} >
                                    <Text style={styles.textTitle}>{item.name}</Text>
                                    <Text numberOfLines={1} style={{ color: "gray", fontSize: 12, }}>{item.description}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Icon name="outlined-flag" type="material" color="gray" size={15} />
                                        <Text style={{ color: "gray", fontSize: 12, }}> {item.distance} km.</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                        <Rating imageSize={15} startingValue={item.rate} ractions={5} ratingCount={1} />
                                        <Text style={[styles.textBody, { marginHorizontal: 5 }]}>{item.rate}</Text>
                                        <Icon name="schedule" type="material" color={Colors.secondary} size={15} />
                                        <Text style={[styles.textBody, { marginHorizontal: 5, }]}>{item.time}</Text>
                                        <Icon name="calendar-today" type="material" color={Colors.secondary} size={15} />
                                        <Text style={[styles.textBody, { marginHorizontal: 5 }]}>{item.date}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    inputContainerStyle: {
        backgroundColor: Colors.primary,
    },
    inputStyle: {
        backgroundColor: Colors.gray,
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    viewItem: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: Colors.primary
    },
    view: {
        backgroundColor: Colors.white
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
    image: {
        width: 110,
        height: 110,
        borderRadius: 5,
        justifyContent: "center"
    },
    textTitle: {
        fontWeight: "bold",
        color: Colors.secondary,
    },
    textBody: {
        color: Colors.secondary,
        fontSize: 12,
    },
    card: {
        width: 120,
        padding: 5,
        marginHorizontal: 2
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.secondary,
    },
})