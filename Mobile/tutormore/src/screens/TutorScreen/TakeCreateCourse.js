import React, { useEffect, useState } from "react";
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
  Modal, Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Amount from "../../components/forms/Amount";
import Catagory from "../../components/forms/Catagory";
import Clock from "../../components/forms/Clock";
import Location from "../../components/forms/Location";
import ModalDate from "../../components/forms/ModalDate";
import Tag from "../../components/forms/Tag";
import TermCourse from "../../components/forms/TermCourse";
import TextInputButton from "../../components/forms/TextInputButton";
import UploadImage from "../../components/forms/UploadImage";
import Colors from "../../configs/Colors";
import API from "../../services/API";
import { useGlobalVar } from "../../context/GlobalContex";
import courseAvatars from "../../configs/courseAvatars";
import { SwipeablePanel } from "rn-swipeable-panel";

export default function TakeCreateCourse({ route, navigation }) {
  const { req } = route.params
  const [coureName, setCourseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [catagory, setCatagory] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [lat, setlat] = useState(14.8817767)
  const [long, setlong] = useState(102.0185075)
  const { authentication } = useGlobalVar();
  const [state, dipatch] = authentication
  const currentUser = JSON.parse(state.userData);
  const [modalVisible, setModalVisible] = useState(false);
  //TODO
  const [TimeStart, setTimeStart] = useState(new Date(0, 0, 0, 0));
  const [TimeEnd, setTimeEnd] = useState(new Date(0, 0, 0, 0));
  const [day, setDay] = useState("");
  const [claerdate, setClaerDate] = useState(false);
  const [mytags, setTags] = useState([]);
  const [claerTag, setClaerTag] = useState(false);
  const [requsetId, setRequsetId] = useState(0);
  const [courseAvatar, setCourseAvatar] = useState(0);
  const [requireImage, setRequireImage] = useState(
    require("../../assets/course/picture.png")
  );
  const [isPanelActive, setIsPanelActive] = useState(false);

  //TODO
  const getTimeStart = (result) => {
    setTimeStart(result);
  };
  const getTimeEnd = (result) => {
    setTimeEnd(result);
  };

  async function sendMessage(takeid) {
    const res = await API.post("/notification/message", {
      takeId: takeid,
      title: "Message!!",
      body: "Course you was join have been created! :)",
    });
    console.log(res.data);
  }

  const taked = async () => {
    const clear = () => {
      setCourseName("");
      setClaerTag(true);
      setDay(null);
      setCatagory(null);
      // setDescription("")
      // setTags([])
      setTimeEnd(new Date(0, 0, 0, 0));
      setTimeStart(new Date(0, 0, 0, 0));
      setClaerDate(true);
    };
    try {
      const teke_res = await API.post("/taked", {
        tutorId: currentUser.id,
        requestId: requsetId,
        amount: amount,
        tagname: mytags,
        duration: selectedValue,
        lat: lat.toString(),
        long: long.toString(),
        courseAvatar: courseAvatar,
      });

      await sendMessage(teke_res.data.id);
      ToastAndroid.show("create course success !", ToastAndroid.SHORT);
      clear();
      navigation.navigate("Home", { screen: "Feed" });
    } catch (error) {
      console.log(error);
    }
  }

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
  useEffect(() => {
    setCourseName(req.map((i) => i.name).toString())
    setTimeStart(req.map((i) => i.time_start).toString())
    setTimeEnd(req.map((i) => i.time_end).toString())
    setDay(req.map((i) => i.date).toString())
    setCatagory(req.map((i) => i.categories.name).toString())
    setRequsetId(parseInt(req.map((i) => i.id).toString()))
  }, [])
  return (
    <>
      {/* header */}
      <SafeAreaView style={styles.container} />
      <View style={styles.headerBar}>
        <Text style={styles.textHeader}>Create Course</Text>
        <TouchableOpacity
          onPress={() => taked()}>
          <Icon name="check" type="material" color={Colors.secondary} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.area}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => setIsPanelActive(true)}>
            <Image source={requireImage} style={styles.imageTitle} />
            <Text style={styles.text}>Change image</Text>
          </TouchableOpacity>
          <TextInputButton
            label={"Course"}
            onTextChange={(text) => setCourseName(text)}
            value={coureName}
            editable={true}
          />
          <TextInputButton
            label={"Date"}
            onTextChange={(text) => setCourseName(text)}
            value={day}
            editable={false}
          />
          <TextInputButton
            label={"Time Start"}
            onTextChange={(text) => setCourseName(text)}
            value={TimeStart}
            editable={false}
          />
          <TextInputButton
            label={"Time End"}
            onTextChange={(text) => setCourseName(text)}
            value={TimeEnd}
            editable={false}
          />
          <TermCourse value={[selectedValue, setSelectedValue]} />
          <TextInputButton
            label={"Amount"}
            placeholder={"Enter the number of seats"}
            onTextChange={(text) => setAmount(text)}
            keyboardType={"phone-pad"}
            value={amount}
          />
          <TextInputButton
            label={"Category"}
            onTextChange={(text) => setCourseName(text)} value={catagory} editable={false} />
          <Tag
            value={[mytags, setTags]} claerTag={[claerTag, setClaerTag]} />
           <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Location
              lat={[lat, setlat]}
              long={[long, setlong]}
              modal={[modalVisible, setModalVisible]}
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.headerBar_modal}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="cancel" type="material" color={Colors.secondary} />
              </TouchableOpacity>
            </View>
            <Location
              lat={[lat, setlat]}
              long={[long, setlong]}
              modal={[modalVisible, setModalVisible]}
            />
          </Modal>
        </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 10,
    marginTop: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
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