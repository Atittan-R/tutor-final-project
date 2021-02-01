import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Image,
  Modal,
} from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Catagory from "../../components/forms/Catagory";
import Clock from "../../components/forms/Clock";
import Location from "../../components/forms/Location";
import ModalDate from "../../components/forms/ModalDate";
import Tag from "../../components/forms/Tag";
import TermCourse from "../../components/forms/TermCourse";
import TextInputButton from "../../components/forms/TextInputButton";
import Colors from "../../configs/Colors";
import API from "../../services/API";
import { SwipeablePanel } from "rn-swipeable-panel";
import courseAvatars from "../../configs/courseAvatars";
import { useGlobalVar } from "../../context/GlobalContex";
import AlertComponent from '../../components/Alerts';

export default function CreateCourse({ navigation }) {
  const { authentication } = useGlobalVar();
  const [state, dispatch] = authentication;
  const current = JSON.parse(state.userData);
  const [modalVisible, setModalVisible] = useState(false);
  const [day, setDay] = useState("");
  const [mytags, setTags] = useState([]);
  const [claerTag, setClaerTag] = useState(false);
  const [claerdate, setClaerDate] = useState(false);
  const [TimeStart, setTimeStart] = useState(new Date(0, 0, 0, 0));
  const [TimeEnd, setTimeEnd] = useState(new Date(0, 0, 0, 0));
  const [coureName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [courseAvatar, setCourseAvatar] = useState(0);
  const [amount, setAmount] = useState("");
  const [catagory, setCatagory] = useState("");
  const [lat, setlat] = useState(14.8817767);
  const [long, setlong] = useState(102.0185075);
  const [selectedValue, setSelectedValue] = useState(0);
  const [Alert, setAlert] = useState(false)
  const [msg, setText] = useState('')
  const [draggable, setDraggable] = useState({
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    latitude: 14.8817767,
    longitude: 102.0185075,
  });

  const getTimeStart = (result) => {
    setTimeStart(result);
  };
  const getTimeEnd = (result) => {
    setTimeEnd(result);
  };

  const clear = () => {
    setCourseName("");
    setDescription("");
    setClaerTag(true);
    setDay(null);
    setCatagory(null);
    setTimeEnd(new Date(0, 0, 0, 0));
    setTimeStart(new Date(0, 0, 0, 0));
    setClaerDate(true);
    setCount(0);
  };
  const [count, setCount] = useState(0);
  const checkEmpty = () => {
    const start = (TimeStart.getHours() * 60) + TimeStart.getMinutes();
    const end = (TimeEnd.getHours() * 60) + TimeEnd.getMinutes();
    const sum = end - start;
    if (!coureName.trim()) {
      setCount(1);
      setAlert(true)
      setText('Please enter course name');
      return;
    }
    if (!day.toString().trim()) {
      setCount(1);
      setAlert(true)
      setText('Please set the day');
      return;
    }
    if (sum < 60) {
      setCount(1);
      setAlert(true)
      setText("Please set time correctly, at least  minutes away. Result: ");
      return;
    }
    if (selectedValue == 0) {
      setCount(1);
      setAlert(true)
      setText('Please select term course');
      return;
    }
    if (!amount.trim()) {
      setCount(1);
      setAlert(true)
      setText('Please enter amount of seats');
      return;
    }
    if (catagory == 0) {
      setCount(1);
      setAlert(true)
      setText('Please select Catagory');
      return;
    }
    setCount(2);
  }
  useEffect(() => {
    console.log("count =>>>>" + count);
    if (count == 2) {
      create();
    }
  }, [count]);
  const create = async () => {
    try {
      const createCourse = await API.post("course/create", {
        name: coureName,
        description: description,
        day: day.toString(),
        time_start: TimeStart.getHours() + ":" + TimeStart.getMinutes(),
        time_end: TimeEnd.getHours() + ":" + TimeEnd.getMinutes(),
        categoryId: catagory,
        amount: amount,
        userId: current.id,
        tagname: mytags,
        duration: selectedValue,
        lat: draggable.latitude.toString(),
        long: draggable.longitude.toString(),
        courseAvatar: courseAvatar,
      });
      console.log(createCourse)
      clear();
      navigation.navigate("Me", { screen: "TeachingList" });
      ToastAndroid.show("create course success !", ToastAndroid.LONG);
    } catch (error) {
      console.log(error);
    }
    console.log("draggable ", draggable.latitude);
  };

  const [requireImage, setRequireImage] = useState(
    require("../../assets/course/picture.png")
  );
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    onlySmall: true,
    showCloseButton: true,
    onClose: () => setIsPanelActive(false),
    onPressCloseButton: () => setIsPanelActive(false),
  });

  const changeImage = (id) => {
    setRequireImage(courseAvatars[id].image);
    setCourseAvatar(id);
  };

  return (
    <>
      {/* header */}
      <SafeAreaView style={styles.container} />
      <View style={styles.headerBar}>
        <Text style={styles.textHeader}>Create Course</Text>
        {/*<TouchableOpacity onPress={() => create()}>*/}
        {/*  <Icon name="check" type="material" color={Colors.secondary} />*/}
        {/*</TouchableOpacity>*/}
      </View>
      <ScrollView style={styles.area}>
        <View style={styles.content}>
          {Alert &&
            <AlertComponent text={[msg, setText]} alert={[Alert, setAlert]} />}
          <TouchableOpacity onPress={() => setIsPanelActive(true)}>
            <Image source={requireImage} style={styles.imageTitle} />
            <Text style={styles.text}>Change image</Text>
          </TouchableOpacity>
          <TextInputButton
            placeholder={"Course"}
            onTextChange={(text) => setCourseName(text)}
            value={coureName}
          />
          <TextInputButton
            placeholder={"Description"}
            onTextChange={(text) => setDescription(text)}
            value={description}
          />
          <ModalDate dayValue={[day, setDay]} />
          <Clock
            label={"Time Start"}
            callback={getTimeStart}
            claerdate={[claerdate, setClaerDate]}
          />
          <Clock
            label={"Time End"}
            callback={getTimeEnd}
            claerdate={[claerdate, setClaerDate]}
          />
          <TermCourse value={[selectedValue, setSelectedValue]} />
          <TextInputButton
            placeholder={"Number of seats"}
            onTextChange={(text) => setAmount(text)}
            value={amount}
            keyboardType={"phone-pad"}
          />
          <Catagory
            selectedValue={catagory}
            onValueChange={(itemValue, itemIndex) => setCatagory(itemValue)}
          />
          <Tag value={[mytags, setTags]} claerTag={[claerTag, setClaerTag]} />


          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Location
              lat={[lat, setlat]}
              long={[long, setlong]}
              draggable={[draggable, setDraggable]}
              modal={[modalVisible, setModalVisible]}
            />
          </TouchableOpacity>

          <Modal animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.headerBar_modal}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="cancel" type="material" color={Colors.secondary} />
              </TouchableOpacity>
            </View>
            <Location
              lat={[lat, setlat]}
              long={[long, setlong]}
              draggable={[draggable, setDraggable]}
              modal={[modalVisible, setModalVisible]}
            />
          </Modal>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => checkEmpty()}>
          <Text style={styles.title}>Create</Text>
        </TouchableOpacity>
        <View style={{ marginVertical: 10 }} />
      </ScrollView>

      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => changeImage(1)}>
            <Image source={courseAvatars[1].image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(2)}>
            <Image source={courseAvatars[2].image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(3)}>
            <Image source={courseAvatars[3].image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(4)}>
            <Image source={courseAvatars[4].image} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => changeImage(5)}>
            <Image source={courseAvatars[5].image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(6)}>
            <Image source={courseAvatars[6].image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(7)}>
            <Image source={courseAvatars[7].image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(8)}>
            <Image source={courseAvatars[8].image} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => changeImage(9)}>
            <Image source={courseAvatars[9].image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(10)}>
            <Image source={courseAvatars[10].image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(11)}>
            <Image source={courseAvatars[11].image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(12)}>
            <Image source={courseAvatars[12].image} style={styles.image} />
          </TouchableOpacity>
        </View>
      </SwipeablePanel>
    </>
  );
}
export const styles = StyleSheet.create({
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
    backgroundColor: Colors.primary,
  },
  headerBar_modal: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-end",
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
    color: Colors.secondary,
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
    marginTop: 15,
  },
  imageTitle: {
    width: 120,
    height: 120,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    color: "#a5a5a5",
    alignSelf: "center",
    // fontWeight: "bold"
  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Colors.primary,
    borderRadius: 30,
    marginTop: 10,
    paddingVertical: 10,
    elevation: 2,
  },
});
