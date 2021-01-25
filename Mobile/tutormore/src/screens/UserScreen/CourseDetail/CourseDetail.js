import React, {useEffect, useReducer, useState} from "react";
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
import { Icon } from "react-native-elements";
import Colors from "../../../configs/Colors";
import MapView, { Marker } from "react-native-maps";
import API from "../../../services/API";
import { useGlobalVar } from "../../../context/GlobalContex";
import LoadingScreen from "../../../components/Loading";
import { Linking } from "react-native";
import {actionCreators, initialState, reducer} from "../Reducer";

export default function CourseDetail({ navigation, route }) {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;
    const [detail, setDetail] = useState({});
    const [reduce, loadDispatch] = useReducer(reducer, initialState)

    const currentUser = JSON.parse(state.userData);
    const { course } = route.params;
    console.log("Course parameter",course)

     const courseData  = async () => {
        loadDispatch(actionCreators.loading())
        try {
            const res = await API.get("/course/findOne/"+course)
            console.log("res: ",res.data.course)
            const courseDetail = await res.data.course;
            loadDispatch(actionCreators.success(courseDetail));
        }catch (e){
            loadDispatch(actionCreators.failure())
            console.log("err",e.message)
        }
    }

    useEffect(() => {
        courseData();
    }, []);

    const [draggable, setDraggable] = useState({
        latitude: parseFloat(detail.lat),
        longitude: parseFloat(detail.long),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    // console.log(currentUser.id, course)
    const enrollData = async () => {
        try {
            const response = await API.post("/enroll/course",
                {
                    userId: currentUser.id,
                    courseId: course,
                })
            console.log("status ",response.data.status)
            //TODO
            // Generate QRCode
            // Popup QRCode
            // Ask where to go History or Back
            ToastAndroid.show("Enroll " + response.data.status, ToastAndroid.LONG);
            navigation.navigate("Me", { screen: "MyCourse" , params: { focus: "focus" } })
        } catch (e) {
            alert(e.response.data.status);
        }
    }

    const alertEnroll = () => {
        Alert.alert(
            "Enroll",
            "Are you sure to enroll?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "OK", onPress: async () => {
                        await enrollData();
                    }
                },
            ],
            { cancelable: false }
        );
    };


    // console.log("detail: ",detail.tutors.email);
    const { data, loading, error } = reduce
    if(loading){
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

    console.log("data: ",data)
    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <TouchableOpacity
                    style={{ color: Colors.secondary, marginRight: 10 }}
                    onPress={() => navigation.push("Home")}
                >
                    <Icon
                        name="arrow-back-outline"
                        type="ionicon"
                        color={Colors.secondary}
                    />

                </TouchableOpacity>
                <Text style={styles.textHeader}>Course Name</Text>
            </View>

            {/* body */}
            <ScrollView style={{ backgroundColor: Colors.white }}>
                <View style={styles.barTitle}>
                    <Text style={{ marginLeft: 20, fontWeight: "bold", color: Colors.secondary }}>
                        Details
                        </Text>
                </View>
                <View style={styles.viewImage}>
                    <Image
                        source={require("../../../assets/Appicon.png")}
                        style={styles.image}
                    />
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
                    <Icon name="category" type="material"  color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Category</Text>
                        <Text style={styles.text}>{data.CourseCate.name}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="schedule" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Time</Text>
                        <Text style={styles.text}>{data.time_start + " - " + data.time_end}</Text>
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
                        <Text style={styles.text}>{data.amount}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="place" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Place</Text>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('google.navigation:q='+draggable.latitude+","+draggable.longitude)}>
                        <Text style={styles.text}>navigate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewMap}>
                    {/*<MapView*/}
                    {/*    style={styles.map}*/}
                    {/*    region={draggable}*/}
                    {/*    onRegionChangeComplete={(region) => setDraggable(region)}*/}
                    {/*>*/}
                    {/*    <Marker*/}
                    {/*        coordinate={{ latitude : parseFloat(data.lat) , longitude : parseFloat(data.long) }}*/}
                    {/*    />*/}
                    {/*</MapView>*/}
                </View>

                <View style={styles.barTitle}>
                    <Text
                        style={{
                            marginLeft: 20,
                            fontWeight: "bold",
                            color: Colors.secondary,
                        }}
                    >
                        Tutor Profile
                        </Text>
                </View>
                <View style={styles.view}>
                    <Icon name="person" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Name</Text>
                        {/*{console.log( detail )}*/}
                        <Text style={styles.text}>{data.tutors.username ? data.tutors.username: "Not specified"}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon name="school" type="material" color={Colors.secondary} />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Major</Text>
                        <Text style={styles.text}>{data.tutors.major ? data.tutors.major: "Not specified"}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Icon
                        name="line"
                        type="fontisto"
                        color={Colors.secondary}
                        size={20}
                    />
                    <View style={styles.viewItem}>
                        <Text style={styles.title}>Line ID</Text>
                        <Text style={styles.text}>{data.tutors.phonenumber ? data.tutors.phonenumber: "Not specified"}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={alertEnroll}>
                    <Text style={styles.title}>Enroll</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: 10 }} />
            </ScrollView>
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
        marginTop: 20,
        width: 100,
        height: 100,
    },
    viewImage: {
        justifyContent: "center",
        flexDirection: "row",
    },
    barTitle: {
        justifyContent: "flex-start",
        flexDirection: "row",
        backgroundColor: Colors.primary,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    view: {
        flexDirection: "row",
        marginHorizontal: 30,
        alignItems: "center",
        marginTop: 10,
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
});
