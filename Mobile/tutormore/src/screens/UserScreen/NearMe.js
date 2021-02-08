import React, { useCallback, useEffect, useState } from 'react'
import { Image, SafeAreaView,  RefreshControl, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon, Rating } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Colors from '../../configs/Colors';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { getDistance, getPreciseDistance } from 'geolib';
import API from '../../services/API';
import courseAvatars from '../../configs/courseAvatars';
import NoDataScreen from '../../components/Nodata';
import AlertComponent from "../../components/Alerts";
import LoadingScreen from '../../components/Loading';

export default function Search({ navigation }) {
    const [msg, setText] = useState("");
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    // search bar
    const [course, setcourse] = useState([])
    const [location, setLocation] = useState(null);
    const [search, setSearch] = useState('');
    const [errorMessage, setErrorMsg] = useState('');
    const updateSearch = (search) => {
        setSearch({ search });
    };

    const calculateDistance = (lat, long) => {
        var dis = getDistance(
            { latitude: location.coords.latitude, longitude: location.coords.longitude },
            { latitude: parseFloat(lat), longitude: parseFloat(long) }
        );
        // alert(`Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`);
        return dis / 1000
    };

    const fecth = async () => {
        try{
            setLoading(true)
            const courses = await API.get("course/findAll");
            await courses.data.map((i) => i.distance = calculateDistance(i.lat, i.long));
            await courses.data.sort((a, b) => (a.distance - b.distance))
            let a = await courses.data.filter(i => i.distance <= 20.00)
            setcourse(a)
            setLoading(false)
        }catch(error) {
            setText(error.response.data.message)
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    useEffect(() => {
        if (location != null) {
            fecth();
        } else {
            console.log('====================================');
            console.log(location);
            console.log('====================================');
        }
    }, [location])

    console.log(location);

    // const onRefresh = useCallback(() => {
    //     setRefreshing(true);
    //     fetch().then(() => setRefreshing(false));
    // }, []);

    return (
        <>
            <SafeAreaView style={styles.container} />
            <View style={styles.viewItem}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}>
                    <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Places near me</Text>
                <Icon name="location-on" type="material" color={Colors.secondary} />
            </View>
            <ScrollView style={styles.view}>
                <View style={styles.line} />
                <View style={[styles.topic, styles.row]}>
                    <View style={styles.box} />
                    <Text style={styles.textRec}>Near Me</Text>
                </View>
                {loading
                    ? <LoadingScreen />
                    : error ? <AlertComponent text={[msg, setText]} alert={[error, setError]} />
                    : course.length === 0
                    ? <View style={{ flex: 1, paddingVertical: 250 }}>
                                <NoDataScreen data={"Near You"} />
                            </View>
                    : <FlatList
                        data={course}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("CourseDetail", { course: item.id })}>
                                <View style={
                                    {
                                        backgroundColor: "#fff",
                                        padding: 5,
                                        flexDirection: "row",
                                        marginHorizontal: 2,
                                        flexWrap: "wrap"
                                    }}>
                                    <Image source={courseAvatars[item.courseAvatar].image} style={styles.image} />
                                    <View style={{ flex: 1, marginLeft: 10, justifyContent: "flex-start", alignItems: "flex-start" }} >
                                        <Text numberOfLines={1} style={styles.textTitle}>{item.name}</Text>
                                        <Text numberOfLines={1} style={{ color: "gray", fontSize: 12, }}>{item.description}</Text>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Icon name="schedule" type="material" color="gray" size={15} />
                                            <Text style={styles.textGray}>{item.time_start.substring(0,5)}-{item.time_end.substring(0,5)}</Text>
                                            <Icon name="calendar-today" type="material" color="gray" size={15} />
                                            <Text style={styles.textGray}>{item.day}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                            <Rating imageSize={15} startingValue={item.rate} fractions={5} ratingCount={1} />
                                            <Text style={styles.textBlack}>{item.rate}</Text>
                                            <Icon name="outlined-flag" type="material" color={Colors.secondary} size={15} />
                                            <Text style={styles.textBlack}>{item.distance} km.</Text>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                                }
                            />
            }
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
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.secondary,
    },
})