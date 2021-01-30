import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon, Rating } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Colors from '../../configs/Colors';
import courseAvatars from '../../configs/courseAvatars';
import API from '../../services/API';

export default function Search({ navigation }) {

    // search bar
    const [search, setSearch] = useState('');
    const [Request, setRequest] = useState([])
    const [Course, setCourse] = useState([])
    const [Tag, setTag] = useState([])
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
    const fetchTag = async (name) => {
        console.log("tag: ", name);
        try {
            const tag = await API.post("/search/tag", {
                tag: name
            })
            const arr = tag.data
            const course = []
            const request = []
            arr.map((i) => i.courses.map((i) => course.push(i)))
            arr.map((i) => i.requests.map((i) => request.push(i)))
            setCourse(course)
            setRequest(request)
            console.log(request);
            // console.log(arr.map((i)=>i.courses));
            // setCourse(courses.data)
        } catch (error) {
            console.log(error);
        }
    }
    const fetchCourse = async () => {
        try {
            const courses = await API.post("/search/course", {
                searchQuerying: search
            })

            // console.log(courses.data);
            setCourse(courses.data)
        } catch (error) {
            console.log(error);
        }
    }
    const fetchRequest = async () => {
        try {
            const requests = await API.post("/search/request", {
                searchQuerying: search
            })

            // console.log(requests.data);
            setRequest(requests.data)
        } catch (error) {
            console.log(error);
        }
    }
    const fetchtag = async () => {
        try {
            const tag = await API.get("/Tagrecommended")

            // console.log(tag.data);
            setTag(tag.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (search != "") {
            fetchCourse()
            fetchRequest()
        } else {
            setRequest([])
            setCourse([])
        }

    }, [search])
    useEffect(() => {
        fetchtag()
    }, [])
    return (
        <>
            <SafeAreaView style={styles.container} />
            <View style={styles.viewItem}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Search"
                    onChangeText={(text) => setSearch(text)}
                    value={search}
                    style={styles.search}
                    autoFocus={true}
                    selectTextOnFocus={true} />
                <TouchableOpacity
                    onPress={() => navigation.push("NearMe")}>
                    <Icon name="location-on" type="material" color={Colors.secondary} />
                    <Text style={styles.textBody}>near me</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
                <View style={styles.line} />
                <View style={[styles.topic, styles.row]}>
                    <View style={styles.box} />
                    <Text style={styles.textRec}>Trending Tags</Text>
                </View>
                <View style={[styles.row, { flexWrap: "wrap" }]}>
                    <FlatList
                        data={Tag}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => fetchTag(item.name)}>
                                <Text style={styles.tag}>{item.name}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <View style={styles.line} />
                <View style={[styles.topic, styles.row]}>
                    <View style={styles.box} />
                    <Text style={styles.textRec}>Request Course</Text>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={Request}
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

                <View style={styles.line} />
                <View style={[styles.topic, styles.row]}>
                    <View style={styles.box} />
                    <Text style={styles.textRec}>Course</Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Course}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", { course:  item.id })}>
                            <View style={
                                {
                                    backgroundColor: "#fff",
                                    padding: 5,
                                    flexDirection: "row",
                                    marginHorizontal: 2,
                                    flexWrap: "wrap",
                                    marginBottom: 1
                                }}>
                                    <Image source={courseAvatars[item.courseAvatar].image} style={{ width: 70, height: 70, borderRadius: 5 }} />
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
    search: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 30,
        backgroundColor: Colors.gray
    },
    viewItem: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
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
    tag: {
        color: Colors.secondary,
        backgroundColor: Colors.gray,
        borderRadius: 5,
        margin: 10,
        padding: 5
    }
})