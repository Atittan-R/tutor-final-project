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
import { useGlobalVar } from "../../context/GlobalContex";
import Colors from '../../configs/Colors';
import avatars from "../../configs/avatars";
import API from "../../services/API";
import LoadingScreen from "../../components/Loading";
import categories from "../../configs/categories";
export default function Feed({ navigation }) {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;
    const userid = JSON.parse(state.userData);
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading] = useState(false);

    // console.log("user_id", userid.id)
    const [request, setRequest] = useState([]);
    const taked = async (requestId) => {
        navigation.navigate("Home", { screen: "TakeCreateCourse", params: { req: request.filter((i) => i.id == requestId) } })
    }
    const fetchApi = async () => {
        setLoading(true);
        try {
            const fetch_req = await API.get("/request/findAll");
            // console.log(fetch_req);
            setRequest(fetch_req.data.request.filter((i) => i.status == "Available"))
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const [filterItem, setFilterItem] = useState(null)
    const searchAction = (text) => {
        setFilterItem(request.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    }
    useEffect(() => {
        const unsub = navigation.addListener("focus", () => {
            fetchApi();
        });

        return unsub;
    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchApi().then(() => setRefreshing(false));
    }, []);

    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.headerBar}>
                <Text style={styles.textHeader}>Match Request</Text>
                <TextInput
                    style={styles.search}
                    placeholder="Search"
                    onChangeText={(text) => searchAction(text)}
                />
            </View>
            {loading ? <LoadingScreen /> :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} enabled={true} />
                    }
                    data={filterItem ? filterItem : request}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.cardView}>
                            <View style={styles.viewItem}>
                                <Image source={avatars[item.user.avatar].image} style={styles.image}/>
                                <Text style={styles.title}>{item.user.username}</Text>
                            </View>
                            <View
                                style={{
                                    marginTop: 5,
                                    display: "flex",
                                    flexWrap: "wrap",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}>
                                <View>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <View style={styles.viewItem}>
                                        <Icon name="schedule" type="material" color={'gray'} size={15}
                                            style={styles.icon} />
                                        <Text style={styles.textGray}>{item.time_start}-{item.time_end}</Text>
                                        <Icon name="event" type="material" color={"gray"} size={15}
                                            style={styles.icon} />
                                        <Text style={styles.textGray}>{item.date}</Text>
                                    </View>
                                    <View style={styles.viewItem}>
                                        <Icon name="category" type="material" color={"gray"} size={15}
                                            style={styles.icon} />
                                        <Text style={styles.textGray}>{categories[item.categoryId].name}</Text>
                                    </View>
                                    <View style={styles.viewItem}>
                                        {item.tag.length !== 0 &&
                                        <FlatList
                                            horizontal={true}
                                            data={item.tag}
                                            showsHorizontalScrollIndicator={false}
                                            keyExtractor={item => item.id}
                                            renderItem={({item: {name}}) =>
                                                <Text style={styles.tag}>
                                                    {name}
                                                </Text>
                                            }/>
                                        }
                                    </View>
                                </View>
                                <View style={styles.positionBTN}>
                                    <TouchableOpacity style={styles.button}
                                        onPress={() => taked(item.id)}
                                    >
                                        <Text style={styles.text}>Take</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                />
            }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    positionBTN: {
        flex: 1,
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
        marginBottom: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: Colors.white
    },
    viewItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginRight: 50
    },
    text: {
        color: Colors.secondary
    },
    textGray: {
        color: "gray",
        fontSize: 12
    },
    title: {
        fontWeight: "bold",
        color: Colors.secondary
    },
    icon: {
        margin: 5
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
    add: {
        padding: 10,
        borderRadius: 30,
        left: 120
    },
    tag: {
        backgroundColor: Colors.gray,
        padding: 5,
        marginRight: 5,
        borderRadius: 5,
        color: Colors.secondary
    }
})