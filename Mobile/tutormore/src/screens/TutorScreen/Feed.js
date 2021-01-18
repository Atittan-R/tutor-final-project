import React, { useEffect, useState } from 'react'
import {
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { Icon } from 'react-native-elements';
import { useGlobalVar } from "../../context/GlobalContex";
import Colors from '../../configs/Colors';
import API from "../../services/API"
export default function Feed({ navigation }) {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;
    const userid = JSON.parse(state.userData);
    // console.log("user_id", userid.id)
    const [request, setRequest] = useState([]);
    // const data = [
    //     { id: 1, name: "pixels dragon x", course: "Database", date: "Mon Wed Fri", time: "17.0-21.0" },
    //     { id: 2, name: "ruin force", course: "Com pro1", date: "Sun Mon Tue Wed Fri Sat", time: "17.0-21.0" },
    //     { id: 3, name: "michael rayder", course: "Data Com", date: "Everyday", time: "17.0-21.0" },
    //     { id: 4, name: "lucius flux", course: "HCI", date: "Mon Wed Fri", time: "17.0-21.0" },
    //     { id: 5, name: "kuro monitor", course: "Math for Com", date: "Mon Wed Fri", time: "17.0-21.0" },
    //     { id: 6, name: "pixels dragon x", course: "Database", date: "Mon Wed Fri", time: "17.0-21.0" },
    //     { id: 7, name: "ruin force", course: "Com pro1", date: "Sun Mon Tue Wed Fri Sat", time: "17.0-21.0" },
    //     { id: 8, name: "michael rayder", course: "Data Com", date: "Everyday", time: "17.0-21.0" },
    //     { id: 9, name: "lucius flux", course: "HCI", date: "Mon Wed Fri", time: "17.0-21.0" },
    //     { id: 10, name: "kuro monitor", course: "Math for Com", date: "Mon Wed Fri", time: "17.0-21.0" },
    //     { id: 11, name: "pixels dragon x", course: "Database", date: "Mon Wed Fri", time: "17.0-21.0" },
    //     { id: 12, name: "ruin force", course: "Com pro1", date: "Sun Mon Tue Wed Fri Sat", time: "17.0-21.0" },
    //     { id: 13, name: "michael rayder", course: "Data Com", date: "Everyday", time: "17.0-21.0" },
    //     { id: 14, name: "lucius flux", course: "HCI", date: "Mon Wed Fri", time: "17.0-21.0" },
    //     { id: 15, name: "kuro monitor", course: "Math for Com", date: "Mon Wed Fri", time: "17.0-21.0" },
    // ];
    const taked = async (requestId) =>{
        try {
           
            // const teke_res = await API.post("/taked", {
            //     tutorId: 2,requestId:requestId
            // });
            // console.log('====================================');
            // console.log((teke_res));
            // console.log('====================================');
            setRequest(request.filter((i)=>i.id!==requestId))
            console.log(request);
            // navigation.navigate("CreateCourse")

        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }
    const fetchApi = async () => {
        try {
            const fetch_req = await API.get("/request/findAll");
            // const fetch_join = await API.post("/user/join", {
            //     userId: userid.id,
            // // });
            // console.log('====================================');
            // console.log((fetch_join));
            // console.log('====================================');
            setRequest(fetch_req.data.request.filter((i)=>i.status=="Available"))
            // setisJoin(fetch_join.data)

        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            error
        }
    }

    const [filterItem, setFilterItem] = useState(null)
    const searchAction = (text) => {
        setFilterItem(request.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <TouchableOpacity
                    style={{ color: Colors.secondary, marginRight: 10 }}
                    onPress={() => navigation.navigate("Home")}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Feed Request</Text>
              
                        <TextInput
                    style={styles.search}
                    placeholder="Search"
                    onChangeText={(text) => searchAction(text)}
                />
                 
            </View>

            <FlatList
                data={filterItem ? filterItem : request}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <View style={styles.cardView}>
                        <View style={styles.viewItem}>
                            <Image source={require("../../assets/profile.jpg")} style={styles.image} />
                            <Text style={styles.title}>{item.user.username}</Text>
                        </View>
                        <View
                            style={{
                                marginTop: 5,
                                borderTopColor: Colors.gray,
                                borderTopWidth: 1,
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                            <View>
                                <View style={styles.viewItem}>
                                    <Icon name="book" type="material" color={Colors.secondary} style={styles.icon} />
                                    <Text style={styles.title}>{item.name}</Text>
                                </View>
                                <View style={styles.viewItem}>
                                    <Icon name="event" type="material" color={Colors.secondary} style={styles.icon} />
                                    <Text style={styles.text}>{item.date}</Text>
                                </View>
                                <View style={styles.viewItem}>
                                    <Icon name="schedule" type="material" color={Colors.secondary} style={styles.icon} />
                                    <Text style={styles.text}>{item.time_start}-{item.time_end}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.button}
                                onPress={() => taked(item.id)}
                            >
                                <Text style={styles.text}>Take</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    search: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginLeft: 20,
        borderRadius: 30,
        backgroundColor: Colors.gray,
    },
    cardView: {
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: Colors.white
    },
    viewItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    text: {
        color: Colors.secondary
    },
    title: {
        fontWeight: "bold",
        color: Colors.secondary
    },
    icon: {
        marginRight: 10,
        marginVertical: 2
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.primary,
        marginRight: 10
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    add: {
        padding: 10,
        borderRadius: 30,
        left: 120
    }
})