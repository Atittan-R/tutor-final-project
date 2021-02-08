import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon, Rating } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Colors from '../../configs/Colors';
import API from '../../services/API';

export default function TagSearch({ navigation ,route}) {

    // search bar
    const { Tag } = route.params
    const [search, setSearch] = useState('');
    const [Request, setRequest] = useState([])
    const [Course, setCourse] = useState([])
    const test=
        [
            {
                "id": 11,
                "courses": [
                    {
                        "name": "Asian Study",
                        "id": 96
                    }
                ]
            },
            {
                "id": 14,
                "courses": [
                    {
                        "name": "Asian Study",
                        "id": 96
                    }
                ]
            }
        ]
    
    const course = [
        {
            id: "0",
            name: "Computer ",
            description: "จะสอนให้น้องๆ นะครับ ทุกคนเป็นคนดี ไม่ดื้อตั้งใจเเรียน",
            time: "17.0-21.0",
            date: "Mon Wed Fri",
            tutors: "Pixels",
            rate: 2.2,
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
        },
    ];
    const fetchTag = async () => {
        console.log("tag: ",Tag);
        try {
            const tag = await API.post("/search/tag", {
                tag: Tag
            })

          
            const arr=tag.data
            const course=[]
            arr.map((i)=>i.courses.map((i)=>course.push(i)))
            setCourse(course)
            console.log(Course);
            // setCourse(courses.data)
        } catch (error) {
            console.log(error);
        }
    }
 
    useEffect(() => {
     fetchTag()
    }, [])
    return (
        <>
            <SafeAreaView style={styles.container} />
            <View style={styles.line} />
                <View style={[styles.topic, styles.row]}>
                    <View style={styles.box} />
                    <Text style={styles.textRec}>Request Course</Text>
                </View>
                <FlatList
                    data={course}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <TouchableOpacity>
                            <View style={styles.card}>
                                <Image source={{ uri: "https://source.unsplash.com/random" }} style={styles.image} />
                                <Text style={[styles.textTitle, { marginTop: 10 }]}>{item.name}</Text>
                                <Text numberOfLines={1} style={{ color: "gray", fontSize: 12, }}>{item.description}</Text>

                                {/* {item.join_users.length > 0 ?

                                    <Text style={styles.textBody}>{item.join_users.map((i) => i.joinCount)}</Text>
                                    :
                                    <Text style={styles.textBody}>{0}</Text>
                                } */}

                            </View>
                        </TouchableOpacity>
                    }
                />
            <View style={styles.viewItem}>
                <TouchableOpacity
                    style={{ color: Colors.secondary, marginRight: 10 }}
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Course Name</Text>
            </View>
            <FlatList
                data={Course}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity>
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
                                <Text numberOfLines={1} style={{ color: "gray", fontSize: 12, }}>{item.description}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <Rating imageSize={15} startingValue={item.rate} fractions={5} ratingCount={1} />
                                    <Text style={[styles.textBody, { marginHorizontal: 5 }]}>{item.rate}</Text>
                                    <Icon name="schedule" type="material" color={Colors.secondary} size={15} />
                                    <Text style={[styles.textBody, { marginHorizontal: 5, }]}>{item.time_start.substring(0,5)} {item.time_end.substring(0,5)}</Text>
                                    <Icon name="calendar-today" type="material" color={Colors.secondary} size={15} />
                                    <Text style={[styles.textBody, { marginHorizontal: 5 }]}>{item.date}</Text>
                                </View>
                            </View>
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
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.secondary,
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
    tag: {
        color: Colors.secondary,
        backgroundColor: Colors.gray,
        borderRadius: 5,
        margin: 10,
        padding: 5
    }
})