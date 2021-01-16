import React, {useState} from "react";
import {
    Button,
    Image,
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {Icon} from "react-native-elements";
import Colors from "../../configs/Colors";
import MapView, {Marker} from "react-native-maps";
import LoadingScreen from "../../components/Loading";

export default function CourseDetail({navigation}) {
    const data = ["Database", "Mon Wed Fri", "17.0-21.0", "1 Month", "21/30"];
    const [date, setDateNow] = useState(new Date());
    const [duration, setDuration] = useState(3);
    const [price, setPrice] = useState(300);

    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const [draggable, setDraggable] = useState({
        latitude: 51.5078788,
        longitude: -0.0877321,
    });

    function movementMarker(e) {
        // get coordinate from mapviews
        const {latitude, longitude} = e.coordinate;
        // update coordinate
        setDraggable({
            draggable: {latitude, longitude},
        });
    }

    function onClickMap(e) {
        const {latitude, longitude} = e.coordinate;
        setDraggable({
            latitude: latitude,
            longitude: longitude,
        });
    }

    //course details
    const details = {
        course: "Database",
        date: "Mon Wed Fri",
        time: "17.0-21.0",
        duration: "1 month",
        amount: "21/30",
    };
    //tutor profile
    const profile = {
        name: "Yami Sukehiro",
        major: "Information of Technology(ES)",
        line: "@yami.y",
    };

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
                {text: "OK", onPress: () => navigation.push("MyCourse")},
            ],
            {cancelable: false}
        );
    };
    return  (
        <>
            {/* header */}
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBar}>
                    <TouchableOpacity
                        style={{color: Colors.secondary, marginRight: 10}}
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
                <ScrollView style={{backgroundColor: Colors.white}}>
                    <View style={styles.barTitle}>
                        <Text style={{ marginLeft: 20, fontWeight: "bold", color: Colors.secondary}}>
                            Details
                        </Text>
                    </View>
                    <View style={styles.viewImage}>
                        <Image
                            source={require("../../assets/Appicon.png")}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.view}>
                        <Icon name="book" type="material" color={Colors.secondary}/>
                        <View style={styles.viewItem}>
                            <Text style={styles.title}>Course</Text>
                            <Text style={styles.text}>{details.course}</Text>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Icon name="event" type="material" color={Colors.secondary}/>
                        <View style={styles.viewItem}>
                            <Text style={styles.title}>Date</Text>
                            <Text style={styles.text}>{details.date}</Text>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Icon name="schedule" type="material" color={Colors.secondary}/>
                        <View style={styles.viewItem}>
                            <Text style={styles.title}>Time</Text>
                            <Text style={styles.text}>{details.time}</Text>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Icon name="timer" type="material" color={Colors.secondary}/>
                        <View style={styles.viewItem}>
                            <Text style={styles.title}>Duraton</Text>
                            <Text style={styles.text}>{details.duration}</Text>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Icon name="person" type="material" color={Colors.secondary}/>
                        <View style={styles.viewItem}>
                            <Text style={styles.title}>Amount</Text>
                            <Text style={styles.text}>{details.amount}</Text>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Icon name="place" type="material" color={Colors.secondary}/>
                        <View style={styles.viewItem}>
                            <Text style={styles.title}>Place</Text>
                            <Text style={styles.text}>Suranari, Mueang Nakhon Rat...</Text>
                        </View>
                    </View>

                    <View style={styles.viewMap}>
                        <MapView
                            style={styles.map}
                            region={region}
                            onRegionChangeComplete={(region) => setRegion(region)}
                            onPress={(e) => onClickMap(e.nativeEvent)}
                        >
                            <Marker
                                draggable
                                coordinate={draggable}
                                // onDragStart={true}
                                // onDragStart={console.log('onDragStart', arguments)}
                            onDragEnd={(e) => movementMarker(e.nativeEvent)}
                            />
                        </MapView>
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
                        <Icon name="person" type="material" color={Colors.secondary}/>
                        <View style={styles.viewItem}>
                            <Text style={styles.title}>Name</Text>
                            <Text style={styles.text}>{profile.name}</Text>
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Icon name="school" type="material" color={Colors.secondary}/>
                        <View style={styles.viewItem}>
                            <Text style={styles.title}>Major</Text>
                            <Text style={styles.text}>{profile.major}</Text>
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
                            <Text style={styles.text}>{profile.line}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={alertEnroll}>
                        <Text style={styles.title}>Enroll</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    );
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
        // alignItems: "stretch",
        elevation: 2,
    },
});
