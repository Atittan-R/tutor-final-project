import React, {useEffect, useState} from "react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
    Image,
    StatusBar,
    TouchableOpacity,
    Alert,
    Modal
} from "react-native";
import {Icon, Rating} from "react-native-elements";
import Colors from "../../configs/Colors";
import {useGlobalVar} from "../../context/GlobalContex";
import API from "../../services/API";
import courseAvatars from "../../configs/courseAvatars";

export default function TeachingList({navigation}) {
    const {authentication} = useGlobalVar();
    const [state, dispatch] = authentication;
    const currentUser = JSON.parse(state.userData);
    const [Mylist, setMylist] = useState()


    const Delete = async (id) => {
        setMylist(Mylist.filter((i) => i.id != id))
        try {
            const del = await API.delete("/course/delete/" + id)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchlist = async () => {
        try {
            const list = await API.post("/user/MyCourse", {
                userId: currentUser.id
            })
            setMylist(list.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchlist()
    }, [])

    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container}/>
            <View style={styles.headerBar}>
                <TouchableOpacity
                    style={{color: Colors.secondary, marginRight: 10}}
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary}/>
                </TouchableOpacity>
                <Text style={styles.textHeader}>Teaching List</Text>
            </View>

            {/* body */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={Mylist}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.push("CourseDetail", {course: item.id})}
                        // key={item.id}
                    >
                        <View style={styles.card}>
                            <Image source={courseAvatars[item.courseAvatar].image} style={styles.image}/>
                            <View style={styles.content}>
                                <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
                                <View style={styles.contentRow}>
                                    <Icon name="calendar-today" type="material" color="gray" size={15}/>
                                    <Text style={styles.textGray}>{item.time_start} {item.time_end}</Text>
                                    <Icon name="schedule" type="material" color="gray" size={15}/>
                                    <Text style={styles.textGray}>{item.day}</Text>
                                </View>
                                <View style={styles.contentRow}>
                                    <Rating imageSize={15} startingValue={item.rate} ractions={5} ratingCount={1}/>
                                    <Text style={styles.textGray}>{item.rate}</Text>
                                </View>
                                <View style={styles.icon}>
                                    {/* detail */}
                                    <TouchableOpacity
                                        onPress={() => navigation.push("CourseDetail", {course: item.id})}
                                        style={styles.button}>
                                        <Icon name="chrome-reader-mode" type="material" color={Colors.secondary}/>
                                        <Text style={{color: Colors.secondary, fontSize: 10}}>Details</Text>
                                    </TouchableOpacity>

                                    {/* edit */}
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => navigation.push("EditCourse", {req: item})}
                                    >
                                        <Icon name="edit" type="material" color={Colors.secondary}/>
                                        <Text style={{color: Colors.secondary, fontSize: 10}}>Edit</Text>
                                    </TouchableOpacity>

                                    {/* delete */}
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => {
                                            Alert.alert(
                                                "Delete",
                                                item.course + ", are you sure to delete?",
                                                [
                                                    {
                                                        text: "Cancel",
                                                        onPress: () => console.log("Cancel Pressed"),
                                                        style: "cancel"
                                                    },
                                                    {text: "OK", onPress: () => Delete(item.id), style: "cancel"}
                                                ],
                                                {cancelable: false}
                                            )
                                        }}
                                    >
                                        <Icon name="delete-outline" type="material" color={Colors.secondary}/>
                                        <Text style={{color: Colors.secondary, fontSize: 10}}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}/>
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
        backgroundColor: Colors.primary
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.secondary,

    },
    card: {
        padding: 5,
        flexDirection: "row",
        marginHorizontal: 2,
        flexWrap: "wrap",
        backgroundColor: Colors.white
    },
    icon: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 15
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
    textBlack: {
        color: Colors.secondary,
        fontSize: 12,
        marginHorizontal: 5
    },
    textGray: {
        color: "gray",
        fontSize: 12,
        marginHorizontal: 5
    },
    title: {
        fontWeight: "bold",
        color: Colors.secondary
    },
    button: {
        borderRadius: 30,
        marginRight: 5,
        marginTop: 5,
        paddingRight: 10,
        alignItems: "center"
    },
    content: {
        flex: 1, marginLeft: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    contentRow: {
        flexDirection: "row",
        alignItems: "center"
    }

});
