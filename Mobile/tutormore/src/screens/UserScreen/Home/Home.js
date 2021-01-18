import React, { useCallback, useEffect, useReducer, useState } from "react";
import {
    FlatList,
    Image,
    Pressable, RefreshControl,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SwipeablePanel } from "rn-swipeable-panel";
import Colors from "../../../configs/Colors";
import { Rating } from "react-native-elements";
import PanelCategory from "../../../components/swipers/PanelCategory";
import { actionCreators, initialState, reducer } from "./CourseReducer";
import API from "../../../services/API";
import LoadingScreen from "../../../components/Loading";
import { styles } from "./Style";

export default function Home({ navigation }) {
    // search bar
    const [filterItem, setFilterItem] = useState(null)
    const searchAction = (text) => {
        setFilterItem(data.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    }

    //pull dawn to refresh data
    const [refreshing, setRefreshing] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState)

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchData().then(() => setRefreshing(false));
    }, []);

    //Panel Open Close
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: false,
        showCloseButton: true,
        closeOnTouchOutside: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
        // ...or any prop you want
    });
    const [isPanelActive, setIsPanelActive] = useState(false);
    const openPanel = () => {
        setIsPanelActive(true);
    };
    const closePanel = () => {
        setIsPanelActive(false);
    };

    //Data
    async function fetchData() {
        dispatch(actionCreators.loading())

        try {
            const response = await API.get(
                '/course/findAll'
            )
            const course = await response.data;
            // console.log("course:", course)
            dispatch(actionCreators.success(course))
        } catch (e) {
            dispatch(actionCreators.failure())
            // console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const { course, loading, error } = state

    if (loading) {
        return (
            <LoadingScreen />
        )
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>Failed to load posts!</Text>
            </View>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.container} />

            {/*Majors*/}
            <View style={styles.viewItem}>
                <Text style={styles.titleHome}>Tutor More</Text>
                <TextInput
                    style={styles.search}
                    onChangeText={(text) => searchAction(text)}
                    placeholder="Search"
                />
                <TouchableOpacity
                    onPress={() => navigation.push("Search")}>
                    <Icon name="search" type="material" color={Colors.secondary} />
                </TouchableOpacity>
            </View>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                {/*Category*/}
                <View style={styles.bg}>
                    <View style={styles.line} />
                    <View style={{ marginVertical: 10 }}>
                        <View style={[styles.topic, styles.row]}>
                            <View style={[styles.column, styles.box]} />
                            <Text style={[styles.column, styles.textRec]}>Category</Text>
                        </View>
                    </View>

                    <ScrollView horizontal={true}>
                        <TouchableOpacity
                            style={{
                                padding: 5,
                                marginVertical: 2,
                                flex: 1,
                                alignItems: "center",
                            }}
                            onPress={() => openPanel()}
                        >
                            <View
                                style={{
                                    padding: 15,
                                    backgroundColor: Colors.gray,
                                    borderRadius: 20,
                                }}
                            >
                                <Image
                                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                                    source={require("../../../assets/images/categories/digital.png")}
                                />
                            </View>
                            <Text style={{ marginVertical: 2, textAlign: "center" }}>
                                Digital
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: 5,
                                marginVertical: 2,
                                flex: 1,
                                alignItems: "center",
                            }}
                            onPress={() => openPanel()}
                        >
                            <View
                                style={{
                                    padding: 15,
                                    backgroundColor: Colors.gray,
                                    borderRadius: 20,
                                }}
                            >
                                <Image
                                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                                    source={require("../../../assets/images/categories/doctor.png")}
                                />
                            </View>
                            <Text style={{ marginVertical: 2, textAlign: "center" }}>
                                Doctor
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                padding: 5,
                                marginVertical: 2,
                                flex: 1,
                                alignItems: "center",
                            }}
                            onPress={() => openPanel()}
                        >
                            <View
                                style={{
                                    padding: 15,
                                    backgroundColor: Colors.gray,
                                    borderRadius: 20,
                                }}
                            >
                                <Image
                                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                                    source={require("../../../assets/images/categories/engineering.png")}
                                />
                            </View>
                            <Text style={{ marginVertical: 2, textAlign: "center" }}>
                                Engineering
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: 5,
                                marginVertical: 2,
                                flex: 1,
                                alignItems: "center",
                            }}
                            onPress={() => navigation.navigate("test")}
                        >
                            <View
                                style={{
                                    padding: 15,
                                    backgroundColor: Colors.gray,
                                    borderRadius: 20,
                                }}
                            >
                                <Image
                                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                                    source={require("../../../assets/images/categories/more.png")}
                                />
                            </View>
                            <Text style={{ marginVertical: 2, textAlign: "center" }}>
                                More..(Test)
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                {/* recommend */}
                <View style={styles.bg}>
                    <View style={styles.line} />
                    <View style={{ marginVertical: 10 }}>
                        <View style={[styles.topic, styles.row]}>
                            <View style={[styles.column, styles.box]} />
                            <Text style={[styles.column, styles.textRec]}>Recommend</Text>
                        </View>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={course}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    padding: 5,
                                    marginVertical: 2,
                                    marginHorizontal: 10,
                                    flex: 1,
                                    alignItems: "center",
                                    backgroundColor: Colors.gray,
                                    borderRadius: 20,
                                    width: 150,
                                    height: 150,
                                    flexWrap: "wrap",
                                    flexShrink: 1,
                                }}
                            >
                                <View
                                    style={{
                                        padding: 15,
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 60,
                                            height: 60,
                                            resizeMode: "contain",
                                            alignSelf: "center",
                                        }}
                                        source={require("../../../assets/images/categories/digital.png")}
                                    />
                                    <View>
                                        <Text style={{ marginVertical: 2, fontWeight: "bold" }}>
                                            {item.name}
                                        </Text>
                                        <Text numberOfLines={1} style={{ fontSize: 12 }}>{item.description}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.bg}>
                    <View style={styles.line} />
                    <View style={[styles.topic, styles.row]}>
                        <View style={[styles.column, styles.box]} />
                        <Text style={[styles.column, styles.textRec]}>All Course</Text>
                    </View>

                    <FlatList
                        data={filterItem ? filterItem : course}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Pressable
                                style={styles.card}
                                // TODO Set PARAM to CourseDetail
                                onPress={() => {
                                    navigation.navigate("CourseDetail", { course: item });
                                }}
                            >
                                <View style={styles.row}>
                                    <View style={[styles.column, { paddingLeft: 120 }]}>
                                        <View style={{ position: "absolute", top: -36, left: 3 }}>
                                            <Image
                                                style={[
                                                    styles.column,
                                                    {
                                                        width: 100,
                                                        height: 160,
                                                        marginRight: 10,
                                                        borderRadius: 20,
                                                    },
                                                ]}
                                                overflow={"hidden"}
                                                resizeMode={"stretch"}
                                                source={{
                                                    uri:
                                                        "https://images.template.net/715/Free-Children-Book-Cover-Template-2.jpg",
                                                }}
                                            />
                                        </View>
                                    </View>

                                    <View style={[styles.column, { flex: 1 }]}>
                                        <View style={[styles.row, { flex: 2 }]}>
                                            <Text style={styles.courseTitle}>{item.name}</Text>
                                        </View>

                                        <View style={styles.row}>
                                            <Text numberOfLines={2}
                                                style={[
                                                    styles.courseDescription,
                                                    { flex: 1, flexWrap: "wrap" },
                                                ]}
                                            >
                                                {item.description}
                                            </Text>
                                        </View>

                                        <View style={styles.row}>
                                            <View style={styles.column}>
                                                <Text style={styles.row}>{item.tutors.username}</Text>
                                            </View>

                                            <View
                                                style={[
                                                    styles.column,
                                                    {
                                                        flex: 1,
                                                        alignItems: "flex-end",
                                                    },
                                                ]}
                                            >
                                                <Rating imageSize={20} readonly startingValue={item.rate} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                {/*Course Title*/}
                            </Pressable>
                        )}
                    />
                </View>
            </ScrollView>
            <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                <PanelCategory />
            </SwipeablePanel>
        </>
    );
}
