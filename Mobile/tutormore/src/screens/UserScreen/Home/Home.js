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
import { Icon, Rating } from "react-native-elements";
import PanelCategory from "../../../components/swipers/Categories";
import { actionCreators, initialState, reducer } from "./CourseReducer";
import API from "../../../services/API";
import LoadingScreen from "../../../components/Loading";
import { styles } from "./Style";
import NoDataScreen from "../../../components/Nodata";
import courseAvatars from "../../../configs/courseAvatars";
import { useGlobalVar } from "../../../context/GlobalContex";

import AlertComponent from "../../../components/Alerts";

export default function Home({ navigation }) {
    // search bar
    const { authentication } = useGlobalVar();
    const [a, dispatchA] = authentication;
    let user = JSON.parse(a.userData);
    const [filterItem, setFilterItem] = useState(null)

    const searchAction = (text) => {
        setFilterItem(data.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    }

    //pull dawn to refresh data
    const [refreshing, setRefreshing] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState)
    const [msg, setText] = useState("");
    const [err, setError] = useState(false)
    const [Recommend,setRecommend]=useState([])

    const recommend = async () =>{
        try {
            const response = await API.get('/course/recommend')
            setRecommend(response.data)
            // console.log(course)
        } catch (e) {
            setText(error.message)
            setError(true)
        }
    }
    async function fetchData() {
        dispatch(actionCreators.loading())
        try {
            const response = await API.get('/course/findAll/')
            const course = await response.data;
            // console.log(course)
            dispatch(actionCreators.success(course))
        } catch (e) {
            setText(error.message)
            setError(true)
            dispatch(actionCreators.failure())
        }
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchData().then(() => setRefreshing(false));
    }, []);

    const openPanel = () => setIsPanelActive(true);
    const closePanel = () => setIsPanelActive(false);

    //Panel Open Close
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        closeOnTouchOutside: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
    });
    const [isPanelActive, setIsPanelActive] = useState(false);
    //Data
    const { data, loading, error } = state

    useEffect(() => {
        fetchData()
        recommend()
    }, [])

    if (error) {
        return (
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <AlertComponent text={[msg, setText]} alert={[err, setError]} /> 
            </ScrollView>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.container} />
            {/*Header*/}
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
            {loading ? <LoadingScreen /> :
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {/*Category*/}
                    <View style={styles.bg}>
                        <View style={{ marginVertical: 10 }}>
                            <View style={[styles.topic, styles.row]}>
                                <View style={[styles.column, styles.box]} />
                                <Text style={[styles.column, styles.textRec]}>Category</Text>
                            </View>
                        </View>

                        <View style={[styles.row, styles.cateWrap]}>
                            <TouchableOpacity
                                style={styles.touchStyle}
                                onPress={() => navigation.navigate("List", { categories: "Digital Technology" })}>
                                <View
                                    style={styles.touchView}>
                                    <Image
                                        style={styles.touchImage}
                                        source={require("../../../assets/course/multimedia.png")}
                                    />
                                </View>
                                <Text style={styles.touchTopic}>
                                    Digital Technology
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.touchStyle}
                                onPress={() => navigation.navigate("List", { categories: "Medicine" })}>
                                <View
                                    style={styles.touchView}>
                                    <Image
                                        style={styles.touchImage}
                                        source={require("../../../assets/course/stethoscope.png")} />
                                </View>
                                <Text style={styles.touchTopic}>
                                    Doctor
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.touchStyle}
                                onPress={() => navigation.navigate("List", { categories: "Engineering" })}>
                                <View style={styles.touchView}>
                                    <Image
                                        style={styles.touchImage}
                                        source={require("../../../assets/course/electrician.png")}
                                    />
                                </View>
                                <Text style={styles.touchTopic}>
                                    Engineering
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.touchStyle}
                                // onPress={() => navigation.navigate("test")}>
                                onPress={() => openPanel()}>
                                <View style={styles.touchView}>
                                    <Image
                                        style={styles.touchImage}
                                        source={require("../../../assets/images/categories/more.png")}
                                    />
                                </View>
                                <Text style={styles.touchTopic}>
                                    More
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* End Categories*/}

                    {/* recommend */}
                    <View style={styles.bg}>
                        <View style={styles.line} />
                        <View style={[styles.row, styles.viewMore]}>
                            <View style={[styles.topic, styles.row]}>
                                <View style={[styles.column, styles.box]} />
                                <Text style={[styles.column, styles.textRec]}>Recommend</Text>
                            </View>
                            <TouchableOpacity><Text style={styles.textViewMore}></Text></TouchableOpacity>
                        </View>

                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={Recommend}
                            keyExtractor={(item) => item.id}
                            key={data.id}
                            renderItem={({ item: { id, name, description, courseAvatar } }) => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("CourseDetail", { course: id })}
                                    style={styles.listStyle}>
                                    <View style={{ padding: 15 }}>
                                        <Image source={courseAvatars[courseAvatar].image}
                                            style={styles.courseImage} />
                                        <View>
                                            <Text numberOfLines={1} style={styles.listName}>
                                                {name}
                                            </Text>
                                            <Text numberOfLines={1} style={styles.listDesc}>{description}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    {/* End Recommend */}

                    <View style={styles.bg}>
                        <View style={styles.line} />
                        <View style={[styles.row, styles.viewMore]}>
                            <View style={[styles.topic, styles.row]}>
                                <View style={[styles.column, styles.box]} />
                                <Text style={[styles.column, styles.textRec]}>All Course</Text>
                            </View>
                            <TouchableOpacity><Text style={styles.textViewMore}></Text></TouchableOpacity>
                        </View>
                        {data.length === 0 ?
                            <NoDataScreen /> :
                            <FlatList
                                data={filterItem ? filterItem : data}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item: { id, name, description, time_start, time_end, day, rate, CourseCate, courseAvatar } }) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            // console.log("courseId", id)
                                            navigation.navigate("CourseDetail", { course: id });
                                        }}
                                    >
                                        <View style={styles.courseWrap}>
                                            <Image source={courseAvatars[courseAvatar].image}
                                                style={styles.courseImage} />
                                            <View style={styles.courseView}>
                                                <Text numberOfLines={1} style={styles.courseName}>{name}</Text>
                                                <View style={styles.courseViewDetail}>
                                                    <Text numberOfLines={1} style={styles.courseDescription}>
                                                        {description}
                                                    </Text>
                                                </View>
                                                <View style={styles.courseViewDetail}>
                                                    <Icon name="schedule" type="material" color="gray" size={15} />
                                                    <Text
                                                        style={styles.textGray}>{time_start.substring(0,5) + " - " + time_end.substring(0,5)}</Text>
                                                    <Icon name="calendar-today" type="material" color="gray" size={15} />
                                                    <Text style={styles.textGray}>{day}</Text>
                                                </View>
                                                <View style={styles.courseDetail}>
                                                    <Rating imageSize={15} startingValue={rate} reactions={5}
                                                        ratingCount={1} />
                                                    <Text style={styles.textBlack}>{rate}</Text>
                                                    <Icon name="category" type="material" color="gray" size={15} />
                                                    <Text style={styles.textBlack}>{CourseCate.name}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        }
                    </View>
                </ScrollView>
            }
            <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                <PanelCategory />
            </SwipeablePanel>
        </>
    );
}