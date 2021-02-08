import React, { useEffect, useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { Icon } from 'react-native-elements'
import LoadingScreen from '../../components/Loading';
import NoDataScreen from '../../components/Nodata';
import Colors from '../../configs/Colors'
import API from "../../services/API";

import AlertComponent from "../../components/Alerts";

export default function CheckList({ navigation, route, props }) {
    const { course, id } = route.params;
    // const {key}=props
    const [CheckData, setCheckData] = useState()
    const [msg, setText] = useState("");
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchCheckList = async () => {
        try {
            setLoading(true)
            const CheckList = await API.post("/selete/attendance", {
                courseId: id
            })
            const data = (CheckList.data)
            const groups = await data.reduce((groups, day) => {
                const date = day.createdAt.split('T')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(day);
                return groups;

            }, {});

            // Edit: to add it in the array format instead
            const groupArrays = await Object.keys(groups).map((date) => {
                return {
                    date,
                    data: groups[date]
                };
            });
            setCheckData(groupArrays);
            setLoading(false)
            setError(false)
        } catch (error) {
            console.log(error);
            setText(error.message)
            setLoading(false)
            setError(true)
        }
    }


    useEffect(() => {
        fetchCheckList()
        // console.log(key);
    }, [])
    //   console.log(CheckData.map((i)=>i.data));
    // console.log(key);

    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container} />
            <View style={styles.space}>
                <View style={styles.headerBar}>
                    <TouchableOpacity
                        style={{ color: Colors.secondary, marginRight: 10 }}
                        onPress={() => navigation.pop()}>
                        <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader} numberOfLines={1}>{course}</Text>

                </View>
            </View>
            {loading ? <LoadingScreen /> : error ? <AlertComponent text={[msg, setText]} alert={[error, setError]} /> :
                <FlatList
                    data={CheckData}
                    // keyExtractor={item => item.id}
                    // key={item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => navigation.push("Attendance", { date: item.date, data: item.data })}
                        >
                            <View style={styles.card}>
                                <Text style={styles.title}>{item.date}</Text>
                                <Icon name="navigate-next" type="material" color={Colors.secondary} />
                            </View>
                        </TouchableOpacity>
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
    headerBar: {
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
    space: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    card: {
        padding: 10,
        flexDirection: "row",
        marginHorizontal: 2,
        flexWrap: "wrap",
        backgroundColor: Colors.white,
        justifyContent: "space-between",
        borderBottomColor: Colors.primary,
        borderTopColor: Colors.primary,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    add: {
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center"
    },
})