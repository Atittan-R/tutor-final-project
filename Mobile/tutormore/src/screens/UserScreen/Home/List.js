import React, { useEffect, useReducer, useState } from 'react'
import { Image, RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon, Rating } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Colors from "../../../configs/Colors";
import { actionCreators, initialState, reducer } from "./CourseReducer";
import API from "../../../services/API";
import LoadingScreen from "../../../components/Loading";
import NoDataScreen from "../../../components/Nodata";
import courseAvatars from "../../../configs/courseAvatars";

export default function List({ navigation, route }) {
    const { categories } = route.params;
    // console.log(categories)
    const [state, dispatch] = useReducer(reducer, initialState)
    const { data, loading, error } = state;

    const fetchCategory = async () => {
        dispatch(actionCreators.loading())
        try {
            const response = await API.post('/course/categories', { cate: categories })
            const list = response.data
            console.log("list=> " + response.data)
            dispatch(actionCreators.success(list))
        } catch (e) {
            alert(e.response.data.message)
        }
    };
    useEffect(() => {
        fetchCategory();
    }, []);

    if (loading) {
        return <LoadingScreen />
    }

    if (error) {
        return (
            <ScrollView style={styles.center}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View>
                    <Text>Failed to load Data!</Text>
                </View>
            </ScrollView>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.container} />
            <View style={styles.viewItem}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>{categories}</Text>
                {/*<Icon name="location-on" type="material" color={Colors.secondary} />*/}
            </View>
            {data.length === 0 ?
                <NoDataScreen data={categories} /> :
                <View style={styles.view}>
                    <View style={styles.line} />
                    <View style={[styles.topic, styles.row]}>
                        <View style={styles.box} />
                        <Text style={styles.textRec}>{categories}</Text>
                    </View>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", { course: item.id })}>
                                <View style={
                                    {
                                        backgroundColor: "#fff",
                                        padding: 5,
                                        flexDirection: "row",
                                        marginHorizontal: 2,
                                        flexWrap: "wrap"
                                    }}>
                                    <Image source={courseAvatars[item.courseAvatar].image}
                                        style={styles.image} />
                                    <View style={{
                                        flex: 1,
                                        marginLeft: 10,
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start"
                                    }}>
                                        <Text numberOfLines={1} style={styles.textTitle}>{item.name}</Text>
                                        <Text numberOfLines={1}
                                            style={{ color: "gray", fontSize: 12, }}>{item.description}</Text>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Icon name="schedule" type="material" color="gray" size={15} />
                                            <Text
                                                style={styles.textGray}>{item.time_start + " - " + item.time_end}</Text>
                                            <Icon name="calendar-today" type="material" color="gray" size={15} />
                                            <Text style={styles.textGray}>{item.day}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                            <Rating imageSize={15} startingValue={item.rate} ractions={5}
                                                ratingCount={1} />
                                            <Text style={styles.textBlack}>{item.rate}</Text>
                                            <Icon name="category" type="material" color="gray" size={15} />
                                            <Text style={styles.textBlack}>{item.CourseCate.name}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            }
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
    viewItem: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "flex-start",
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
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    textTitle: {
        fontWeight: "bold",
        color: Colors.secondary,
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
    card: {
        width: 120,
        padding: 5,
        marginHorizontal: 2
    },
    textHeader: {
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.secondary,
    },
})