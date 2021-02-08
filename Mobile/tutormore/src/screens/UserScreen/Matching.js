import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon, Rating } from 'react-native-elements';
import Colors from '../../configs/Colors';
import courseAvatars from '../../configs/courseAvatars';
import API from '../../services/API';
import LoadingScreen from "../../components/Loading";
import AlertComponent from "../../components/Alerts";
import NoDataScreen from '../../components/Nodata';

export default function Matching({ navigation, route }) {
    const { name, day, time_start, categoryId } = route.params
    const [Course, setCourse] = useState([])
    const [msg, setText] = useState("");
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchMatching = async () => {
        try {
            setLoading(true)
            const fetch_req = await API.post("/course/matching", {
                name: name,
                time_start: time_start,
                day: day,
                category: categoryId
            });
            await setCourse(fetch_req.data)
            setLoading(false)
            console.log("Course: ", fetch_req.data);
            console.log("name: ", name);
            console.log("time_start: ", time_start);
            console.log("day: ", day);
            console.log("category: ", categoryId);
        } catch (error) {
            console.log(error);
            setText(error.response.data.message)
            setLoading(false)
            setError(true)
        }
    }

    const course = [
        { id: "1", name: "Android" },
        { id: "2", name: "IOS" },
        { id: "3", name: "React" },
        { id: "4", name: "Node JS" },
        { id: "5", name: "Java" },
        { id: "6", name: "PHP" },
        { id: "7", name: "Javascript" },

    ];

    const Renderlist = () => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={Course}
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
                            <Image source={courseAvatars[2].image} style={{ width: 70, height: 70, borderRadius: 5 }} />
                            <View style={{ flex: 1, marginLeft: 10, justifyContent: "flex-start", alignItems: "flex-start" }} >
                                <Text style={styles.textTitle}>{item.name}</Text>
                                <Text numberOfLines={1} style={{
                                    color: "gray",
                                    fontSize: 12,
                                }}>{item.description}</Text>
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
                } />
        );

    }

    useEffect(() => {
        fetchMatching()
    }, [])

    useEffect(() => {
        if (Course != []) {
            Renderlist()
        } else {
            alert("No match")
        }
    }, [Course])

    return (
        <>
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Matching</Text>
            </View>
           


            <View style={styles.view}>
                <View style={styles.line} />
                <View style={[styles.topic, styles.row]}>
                    <View style={styles.box} />
                    <Text style={styles.textRec}>Closest course request</Text>
                </View>
                { loading 
                    ? <LoadingScreen /> 
                    : error ? <AlertComponent text={[msg, setText]} alert={[error, setError]} /> 
                    : Course.length === 0 
                    ? <View style={{flex:1, paddingVertical: 300}}>
                        <NoDataScreen data={"Course Match"} /> 
                        </View>
                    : <Renderlist />
                }
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
        paddingLeft: 10
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