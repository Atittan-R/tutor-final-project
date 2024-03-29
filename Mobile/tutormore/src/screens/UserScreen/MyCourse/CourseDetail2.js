import React, { useEffect, useReducer, useState } from "react";
import {
    Image,
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, ToastAndroid, RefreshControl,
} from "react-native";
import {Icon, Rating} from "react-native-elements";
import Colors from "../../../configs/Colors";
import MapView, { Marker } from "react-native-maps";
import API from "../../../services/API";
import { useGlobalVar } from "../../../context/GlobalContex";
import LoadingScreen from "../../../components/Loading";
import { Linking } from "react-native";
import { actionCreators, initialState, reducer } from "../Reducer";
import { SwipeablePanel } from 'rn-swipeable-panel';
import courseAvatars from "../../../configs/courseAvatars";
import avatars from "../../../configs/avatars";
export default function CourseDetail2({ navigation, route }) {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;

    const [reduce, loadDispatch] = useReducer(reducer, initialState)
    const { data, loading, error } = reduce;

    const currentUser = JSON.parse(state.userData);
    const { course } = route.params;
    console.log("Course parameter", course)

    const courseData = async () => {
        loadDispatch(actionCreators.loading())
        try {
            const res = await API.get("/course/findOne/" + course)
            console.log("res d2: ", res.data.course)
            const courseDetail = await res.data.course;
            loadDispatch(actionCreators.success(courseDetail));
        } catch (e) {
            loadDispatch(actionCreators.failure())
            console.log("err", e.message)
        }
    }
    useEffect(() => {
        courseData();
    }, []);

    const leaveCourse = async () => {
        try {
            console.log(currentUser.id)
            const response = await API.post("/cancel/enroll",
                {
                    userId: currentUser.id,
                    courseId: course,
                })
            console.log("status ", response.data)
            ToastAndroid.show("You have Leave Course " + response.data.status, ToastAndroid.LONG);
            navigation.pop()
        } catch (e) {
            alert(e);
        }
    }

    const alertEnroll = () => {
        Alert.alert(
            "Enroll",
            "Are you sure to Leave this Course?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "OK", onPress: async () => {
                        await leaveCourse();
                    }
                },
            ],
            { cancelable: false }
        );
    };


    //Panel Open Close
    const [isPanelActive, setIsPanelActive] = useState(false);
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        onlySmall: true,
        closeOnTouchOutside: true,
        onClose: () => setIsPanelActive(false),
        onPressCloseButton: () => setIsPanelActive(false),
    });


    // const index = data. tutors.experience;
    // const [exp, setExp] = useState(null);
    // if (index == '') {
    //     setExp('')
    // } else if (index == 1) {
    //     setExp("None")
    // } else if (index == 2) {
    //     setExp("Less than 1 year")
    // } else if (index == 3) {
    //     setExp("1 year")
    // }
    // else if (index == 4) {
    //     setExp("2 years")
    // }
    // else if (index == 5) {
    //     setExp("More than 2 years")
    // }
    // console.log("detail: ",detail.tutors.email);

    const [draggable, setDraggable] = useState({
        latitude: parseFloat(data.lat),
        longitude: parseFloat(data.long),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    if (loading) {
        return <LoadingScreen />
    }

    if (error) {
        return (
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.center}>
                    <Text>Failed to load posts!</Text>
                </View>
            </ScrollView>
        )
    }

    // console.log("data: ", data)

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
                <Text style={styles.textHeader}>{data.name}</Text>
            </View>

            {/* body */}
            <ScrollView style={{ backgroundColor: Colors.white }}>
                <View style={styles.viewImage}>
                    <View style={styles.bgImage}>
                        <Image
                            source={courseAvatars[data.courseAvatar].image}
                            style={styles.image}
                        />
                    </View>
                </View>
                <View style={styles.line} />
                <View style={[styles.topic, styles.row]}>
                    <View style={[styles.column, styles.box]} />
                    <Text style={styles.textRec}>Details</Text>
                </View>
                <View style={styles.view}>
                    <Icon name="book" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Course</Text>
                        <Text style={styles.text}>{data.name}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="event" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Date</Text>
                        <Text style={styles.text}>{data.day}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="category" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Category</Text>
                        <Text style={styles.text}>{data.CourseCate.name}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="schedule" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Time</Text>
                        <Text style={styles.text}>{data.time_start.substring(0,5) + " - " + data.time_end.substring(0,5)}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="timer" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Duraton</Text>
                        <Text style={styles.text}>{data.duration}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="person" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Amount</Text>
                        {
                            data.courseEnroll.length === 0
                                ? <Text style={styles.text}> 0/{data.amount}</Text>
                                : <Text style={styles.text}> {data.courseEnroll.map((i) => i.courseEnrollCount)}/{data.amount}</Text>
                        }
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="place" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Place</Text>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('google.navigation:q=' + draggable.latitude + "," + draggable.longitude)}>
                            <Text style={styles.text}>navigate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewMap}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: parseFloat(data.lat), longitude: parseFloat(data.long),
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                        onRegionChangeComplete={(region) => setDraggable(region)}
                    >
                        <Marker
                            coordinate={{ latitude: parseFloat(data.lat), longitude: parseFloat(data.long) }}
                        />
                    </MapView>
                </View>

                <View style={styles.line} />
                <View style={styles.viewMore}>
                    <View style={[styles.topic, styles.row]}>
                        <View style={[styles.column, styles.box]} />
                        <Text style={styles.textRec}>Tutor Profile</Text>
                    </View>
                    <TouchableOpacity onPress={() => setIsPanelActive(true)}>
                        <Text style={styles.textViewMore}>View More</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <Icon name="person" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Name</Text>
                        {/*{console.log( detail )}*/}
                        <Text style={styles.text}>{data.tutors.username ? data.tutors.username : "Not specified"}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="school" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Major</Text>
                        <Text style={styles.text}>{data.tutors.major ? data.tutors.major : "Not specified"}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon
                        name="phone"
                        type="material"
                        color={Colors.secondary}
                        size={20}
                    />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Phone Number</Text>
                        <Text style={styles.text}>{data.tutors.phonenumber ? data.tutors.phonenumber : "Not specified"}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={alertEnroll}>
                    <Text style={styles.title}>Leave Course</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: 10 }} />
            </ScrollView>
            <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                <View style={styles.panelContent}>
                    <Image source={avatars[data.tutors.avatar].image} style={styles.imageTutor} />
                    <Text style={[styles.textHeader, { alignSelf: "center" }]}>{data.tutors.username ? data.tutors.username : "Not specified"}</Text>

                    <View style={[styles.panelRow, { alignSelf: "center" }]}>
                        <Rating imageSize={15} startingValue={data.tutors.tutor_info.rate} fractions={5} ratingCount={5} />
                        <Text style={styles.text}>   {data.tutors.tutor_info.rate}</Text>
                    </View>
                    <View style={[styles.panelRow, { alignSelf: "center" }]}>
                        <Icon name="school" type="material" color={Colors.secondary} style={{ marginRight: 15 }} size={20} />
                        <Text style={styles.text}>{data.CourseCate.name ? data.CourseCate.name : "Not specified"}</Text>
                    </View>
                    <View style={[styles.panelRow, { alignSelf: "center" }]}>
                        <Icon name="phone" type="material" color={Colors.secondary} style={{ marginRight: 15 }} size={20} />
                        <Text style={styles.text}>{data.tutors.tutor_info.phoneNumber ? data.tutors.tutor_info.phoneNumber : "Not specified"}</Text>
                    </View>
                    <View style={[styles.panelRow, { alignSelf: "center" }]}>
                        <Icon name="mail" type="material" color={Colors.secondary} style={{ marginRight: 15 }} size={20} />
                        <Text style={styles.text}>{data.tutors.tutor_info.email ? data.tutors.tutor_info.email : "Not specified"}</Text>
                    </View>
                    <View style={[styles.panelRow, { alignSelf: "center" }]}>
                        <Icon name="line" type="fontisto" color={Colors.secondary} style={{ marginRight: 15 }} size={19} />
                        <Text style={styles.text}>{data.tutors.tutor_info.lineId ? data.tutors.tutor_info.lineId : "Not specified"}</Text>
                    </View>
                    <View style={[styles.panelRow, { alignSelf: "center" }]}>
                        <Text style={[styles.title, { marginRight: 9 }]}>Exp.</Text>
                        <Text style={styles.text}>{data.tutors.tutor_info.experience ? data.tutors.tutor_info.experience : "Not specified"}</Text>
                    </View>
                </View>
            </SwipeablePanel>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    bottom: {
        paddingBottom: 50,
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
    image: {
        // marginTop: 10,
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    viewImage: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "red",
        paddingVertical: 20,
        flex: 1

    },
    bgImage: {
        backgroundColor: Colors.primary,
        borderRadius: 30,
        justifyContent: "center",
        height: 70,
    },
    view: {
        flexDirection: "row",
        marginHorizontal: 30,
        alignItems: "center",
        marginTop: 5,
    },
    viewItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
        marginTop: 10,
        flex: 1,
    },
    text: {
        color: Colors.secondary,
    },
    map: {
        height: 200,
        borderRadius: 50,
    },
    viewMap: {
        justifyContent: "center",
        marginHorizontal: 30,
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        marginHorizontal: 10,
    },
    modalView: {
        backgroundColor: Colors.white,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    line: {
        marginVertical: 10,
        marginHorizontal: 8,
        paddingVertical: 0.4,
        backgroundColor: Colors.gray,
    },
    box: {
        marginTop: -10,
        marginLeft: 8,
        paddingVertical: 1,
        paddingHorizontal: 2.5,
        borderRadius: 30,
        backgroundColor: Colors.primary,
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    textRec: {
        flex: 1,
        alignSelf: "center",
        color: Colors.secondary,
        paddingLeft: 5,
        fontSize: 20,
        fontWeight: "bold",
    },
    textViewMore: {
        fontSize: 12,
        color: "#00b",
    },
    viewMore: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginRight: 30,
        flex: 1
    },
    topic: {
        flex: 1,
        marginBottom: 10,
    },
    panelContent: {
        margin: 20,
    },
    imageTutor: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        alignSelf: "center",
    },
    panelRow: {
        flexDirection: "row",
        alignItems: "center",

    }
});
