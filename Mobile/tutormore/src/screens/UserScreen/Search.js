import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon, Rating } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Colors from '../../configs/Colors';
import courseAvatars from '../../configs/courseAvatars';
import API from '../../services/API';
import avatars from "../../configs/avatars";
import { useGlobalVar } from "../../context/GlobalContex";
export default function Search({ navigation }) {

    // search bar
    const [search, setSearch] = useState('');
    const [Request, setRequest] = useState([])
    const [Course, setCourse] = useState([])
    const [Tag, setTag] = useState([])
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;
    const [isjoin, setisJoin] = useState([]);

    const user = JSON.parse(state.userData);
    console.log("user_id => ", user.id)

    const join = async (resId) => {
        console.log("req_id => ", resId)
        try {
            const join_req = await API.post("join", {
                userId: user.id, requestId: resId
            });
            console.log(join_req.data.status);
            isjoin.push({ id: resId })
            setisJoin([...isjoin, { id: resId }])
            // console.log(isjoin);
        } catch (error) {
            console.log(error);
        }
    }
    const cancel = async (resId) => {
        try {
            const cancel_join = await API.post("join/cancel", {
                userId: user.id, requestId: resId
            });
            isjoin.push({ id: resId })
            setisJoin(isjoin.filter(x => x.id !== resId))
        } catch (error) {
            console.log(error);
        }
    }
    const fetchTag = async (name) => {
        console.log("tag: ", name);
        try {
            const tag = await API.post("/search/tag", {
                tag: name
            })
            const fetch_join = await API.post("/user/join", {
                userId: user.id,
            });

            const arr = tag.data
            const course = []
            const request = []
            arr.map((i) => i.courses.map((i) => course.push(i)))
            arr.map((i) => i.requests.map((i) => request.push(i)))
            setCourse(course)
            setRequest(request)
            setisJoin(fetch_join.data)
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
            const fetch_join = await API.post("/user/join", {
                userId: user.id,
            });
            setisJoin(fetch_join.data)
            console.log(requests.data);
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
                    <Text style={styles.textRec}>Course</Text>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={Course}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <TouchableOpacity>
                            <View style={styles.card}>
                                <Image source={courseAvatars[item.courseAvatar].image} style={styles.image} />
                                <Text style={[styles.textTitle, { marginTop: 10 }]}>{item.name}</Text>
                                <Text numberOfLines={1} style={{ color: "gray", fontSize: 12, }}>{item.description}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <Rating imageSize={15} startingValue={item.rate} ractions={5} ratingCount={1} />
                                    <Text style={[styles.textBody, { marginHorizontal: 5 }]}>{item.rate}</Text>
                                </View>
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
                    <Text style={styles.textRec}>Request Course</Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Request}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", { course: item.id })} style={{ marginHorizontal: 10, }}>
                            <View style={
                                {
                                    backgroundColor: "#fff",
                                    padding: 5,
                                    flexDirection: "row",
                                    marginHorizontal: 2,
                                    flexWrap: "wrap",
                                    marginBottom: 1,
                                    alignItems: "center",
                                    // borderBottomWidth: 1,
                                    // borderBottomColor: Colors.gray,

                                }}>
                                <Image source={avatars[item.user.avatar].image} style={styles.iamgeUser} />
                                <Text style={styles.textTitle}>{item.user.username}</Text>
                            </View>
                            <View style={{ flex: 1, marginTop: 10, justifyContent: "flex-start", alignItems: "flex-start" }} >
                                <Text style={styles.textTitle}>{item.name}</Text>
                                <Text numberOfLines={1} style={{
                                    color: "gray",
                                    fontSize: 12,
                                }}>{item.description}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <Icon name="schedule" type="material" color={Colors.secondary} size={15} />
                                    <Text style={[styles.textBody, { marginHorizontal: 5, }]}>{item.time_start} {item.time_end}</Text>
                                    <Icon name="calendar-today" type="material" color={Colors.secondary} size={15} />
                                    <Text style={[styles.textBody, { marginHorizontal: 5 }]}>{item.date}</Text>
                                </View>
                            </View>
                            <View style={styles.positionBTN}>
                                {
                                    isjoin.map((i) => i.id).includes(item.id) ?
                                        <TouchableOpacity style={styles.buttonCancel} onPress={() => cancel(item.id)}>
                                            <Text style={styles.text}>Cancel</Text>
                                        </TouchableOpacity>
                                        : <TouchableOpacity style={styles.buttonJoin} onPress={() => join(item.id)}>
                                            <Text style={styles.text}>Join</Text>
                                        </TouchableOpacity>
                                }
                            </View>
                            <View style={{ marginBottom: 10 }}></View>
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
        justifyContent: "center",
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
    },
    iamgeUser: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.primary,
        marginRight: 10
    },
    buttonJoin: {
        backgroundColor: Colors.primary,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 55,
    },
    buttonCancel: {
        backgroundColor: Colors.gray,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 55,
    },
    positionBTN: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
})