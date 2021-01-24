import React, { useEffect, useState } from 'react'
import {
    FlatList,
    Image,
    RefreshControl,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { Icon } from 'react-native-elements';
import Colors from '../../configs/Colors';
import API from "../../services/API"
import { useGlobalVar } from "../../context/GlobalContex";
import LoadingScreen from "../../components/Loading";

export default function Feed({ navigation }) {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;
    const [request, setRequest] = useState([]);
    const [isjoin, setisJoin] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading] = useState(false);

    const userid = JSON.parse(state.userData);
    console.log("user_id", userid.id)
    const join = async (resId) => {
        try {
            const join_req = await API.post("join", {
                userId: userid.id, requestId: resId
            });
            // console.log(join_req.data.status);
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
                userId: userid.id, requestId: resId
            });
            // console.log(cancel_join.data);
            isjoin.push({id:resId})
            setisJoin(isjoin.filter(x => x.id !== resId))
            // console.log(isjoin);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchApi = async () => {
        setLoading(true);
        try {
            const fetch_req = await API.get("/request/findAll");
            const fetch_join = await API.post("/user/join", {
                userId: userid.id,
            });
            // console.log((fetch_join));
            setRequest(fetch_req.data.request)
            setisJoin(fetch_join.data)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchApi().then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        fetchApi();
    }, [])

    console.log(isjoin);

    // search bar
    const [filterItem, setFilterItem] = useState(null)
    const searchAction = (text) => {
        setFilterItem(request.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    }

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
            {loading ? <LoadingScreen /> :
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} enabled={true} />
                    }
                    data={filterItem ? filterItem : request}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.cardView} key={item.id}>
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
                                        <Icon name="event" type="material" color={Colors.secondary}
                                            style={styles.icon} />
                                        <Text style={styles.text}>{item.date}</Text>
                                    </View>
                                    <View style={styles.viewItem}>
                                        <Icon name="schedule" type="material" color={Colors.secondary}
                                            style={styles.icon} />
                                        {/* <Text style={styles.text}>{item.time}</Text> */}
                                        <Text style={styles.text}>{item.time_start}-{item.time_end}</Text>
                                    </View>
                                </View>
                                <View style={styles.positionBTN}>
                                    {
                                        isjoin.map((i) => i.id).includes(item.id) ?
                                            <TouchableOpacity style={styles.button_cancel}
                                                              onPress={() => cancel(item.id)}>
                                                <Text style={styles.text}>cancel</Text>
                                            </TouchableOpacity>
                                            : <TouchableOpacity style={styles.button} onPress={() =>
                                                join(item.id)
                                                // setCount((cnt) => cnt + 1)
                                            }>
                                                <Text style={styles.text}>Join</Text>
                                            </TouchableOpacity>
                                    }
                                </View>
                            </View>
                        </View>
                    }/>
            }
        </>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    positionBTN:{
       flex:1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
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
        justifyContent: "center",
        width: 55,
    },
    button_cancel: {
        backgroundColor: Colors.gray,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 55,

    },
    add: {
        padding: 10,
        borderRadius: 30,
        left: 120
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
    searchBar: {
        backgroundColor: Colors.primary,
        paddingBottom: 10,
    }
})
