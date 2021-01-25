import React, {useState} from 'react'
import {
    Alert,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ToastAndroid,
    Button,
    Image,
    Pressable
} from 'react-native'
import {Icon} from 'react-native-elements'
import {ScrollView} from 'react-native-gesture-handler';
import Amount from '../../components/forms/Amount';
import Catagory from '../../components/forms/Catagory';
import Clock from '../../components/forms/Clock';
import Location from '../../components/forms/Location';
import ModalDate from '../../components/forms/ModalDate';
import Tag from '../../components/forms/Tag';
import TermCourse from '../../components/forms/TermCourse';
import TextInputButton from '../../components/forms/TextInputButton';
import UploadImage from '../../components/forms/UploadImage';
import Colors from '../../configs/Colors'
import API from "../../services/API"
import {SwipeablePanel} from 'rn-swipeable-panel';
import courseAvatars from "../../configs/courseAvatars";
import avatars from "../../configs/avatars";

export default function CreateCourse({navigation}) {
    const [day, setDay] = useState("")
    const [mytags, setTags] = useState([]);
    const [claerTag, setClaerTag] = useState(false);
    const [claerdate, setClaerDate] = useState(false);
    const [TimeStart, setTimeStart] = useState(new Date(0, 0, 0, 0));
    const [TimeEnd, setTimeEnd] = useState(new Date(0, 0, 0, 0))
    const [coureName, setCourseName] = useState("");
    const [courseAvatar, setCourseAvatar] = useState(0);
    const [amount, setAmount] = useState("");
    const [catagory, setCatagory] = useState("");
    const [lat, setlat] = useState(14.8817767)
    const [long, setlong] = useState(102.0185075)
    const [selectedValue, setSelectedValue] = useState("");

    const getTimeStart = (result) => {
        setTimeStart(result);
    }
    const getTimeEnd = (result) => {
        setTimeEnd(result);
    }
    const clear = () => {
        setCourseName("")
        setClaerTag(true)
        setDay(null)
        setCatagory(null)
        setTimeEnd(new Date(0, 0, 0, 0))
        setTimeStart(new Date(0, 0, 0, 0))
        setClaerDate(true)
    }

    const create = async () => {
        try {
            const createCourse = await API.post("course/create", {
                name: coureName,
                day: day.toString(),
                time_start: TimeStart.getHours() + ":" + TimeStart.getMinutes(),
                time_end: TimeEnd.getHours() + ":" + TimeEnd.getMinutes(),
                categoryId: catagory,
                amount: amount,
                userId: 2,
                tagname: mytags,
                duration: selectedValue,
                lat: lat.toString(),
                long: long.toString(),
                courseAvatar: courseAvatar,
            });
            clear()
            navigation.navigate("Home", {screen: "Home"})
            ToastAndroid.show("create course success !", ToastAndroid.LONG);
        } catch (error) {
            console.log(error);
        }
    }

    const [requireImage, setRequireImage] = useState(require('../../assets/course/picture.png'));
    const [isPanelActive, setIsPanelActive] = useState(false);
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        onlySmall: true,
        showCloseButton: true,
        onClose: () => setIsPanelActive(false),
        onPressCloseButton: () => setIsPanelActive(false),
    });
    const changeImage = (courseAvatar) => {
        setRequireImage(courseAvatar.image);
        setCourseAvatar(courseAvatar.id)
    }


    return (
        <>
            {/* header */}
            <SafeAreaView style={styles.container}/>
            <View style={styles.headerBar}>
                <Text style={styles.textHeader}>Create Course</Text>
                <TouchableOpacity
                    onPress={() => create()}>
                    <Icon name="check" type="material" color={Colors.secondary}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.area}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => setIsPanelActive(true)}>
                        <Image source={requireImage} style={styles.imageTitle}/>
                        <Text style={styles.text}>Change image</Text>
                    </TouchableOpacity>
                    <TextInputButton
                        label={"Course"}
                        placeholder={"Enter your course name"}
                        onTextChange={(text) => setCourseName(text)}
                        value={coureName}
                    />
                    <ModalDate dayValue={[day, setDay]}/>
                    <Clock
                        label={"Time Start"} callback={getTimeStart} claerdate={[claerdate, setClaerDate]}/>
                    <Clock
                        label={"Time End"} callback={getTimeEnd} claerdate={[claerdate, setClaerDate]}/>
                    <TermCourse value={[selectedValue, setSelectedValue]}/>
                    <TextInputButton
                        label={"Amount"}
                        placeholder={"Enter the number of seats"}
                        onTextChange={(text) => setAmount(text)}
                        value={amount}
                        keyboardType={"phone-pad"}/>
                    <Catagory
                        selectedValue={catagory}
                        onValueChange={(itemValue, itemIndex) => setCatagory(itemValue)}/>
                    <Tag value={[mytags, setTags]} claerTag={[claerTag, setClaerTag]}/>
                    <Location lat={[lat, setlat]} long={[long, setlong]}/>
                </View>
            </ScrollView>
            <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => changeImage(1)}>
                        <Image source={courseAvatars[1].image} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(2)}>
                        <Image source={courseAvatars[2].image} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(3)}>
                        <Image source={courseAvatars[3].image} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(4)}>
                        <Image source={courseAvatars[4].image} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => changeImage(5)}>
                        <Image source={courseAvatars[5].image} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(6)}>
                        <Image source={courseAvatars[6].image} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(7)}>
                        <Image source={courseAvatars[7].image} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(8)}>
                        <Image source={courseAvatars[8].image} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => changeImage(9)}>
                        <Image source={courseAvatars[9].image} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(10)}>
                        <Image source={courseAvatars[10].image} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(11)}>
                        <Image source={courseAvatars[11].image} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage(12)}>
                        <Image source={courseAvatars[12].image} style={styles.image}/>
                    </TouchableOpacity>
                </View>
            </SwipeablePanel>
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
        justifyContent: "space-between",
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
    area: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    viewItem: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Colors.white,
        flex: 1,
    },
    textInput: {
        backgroundColor: Colors.background,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 0.8,
    },
    content: {
        flex: 1,
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: "bold",
        color: Colors.secondary
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 10,
        marginTop: 15
    },
    imageTitle: {
        width: 120,
        height: 120,
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignSelf: "center"
    },
    text: {
        color: "#a5a5a5",
        alignSelf: "center",
        // fontWeight: "bold"
    }
})