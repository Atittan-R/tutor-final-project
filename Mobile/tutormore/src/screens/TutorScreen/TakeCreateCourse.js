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
  Modal,
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
  const { req } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [coureName, setCourseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [catagory, setCatagory] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [lat, setlat] = useState(14.8817767);
  const [long, setlong] = useState(102.0185075);
  const { authentication } = useGlobalVar();
  const [state, dipatch] = authentication;
  const currentUser = JSON.parse(state.userData);

  //TODO
  const [TimeStart, setTimeStart] = useState(new Date(0, 0, 0, 0));
  const [TimeEnd, setTimeEnd] = useState(new Date(0, 0, 0, 0));
  const [day, setDay] = useState("");
  const [claerdate, setClaerDate] = useState(false);
  const [mytags, setTags] = useState([]);
  const [claerTag, setClaerTag] = useState(false);
  const [requsetId, setRequsetId] = useState(0);

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
      title: "Message",
      body: "ได้ยัง ไอ่หอยยย",
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
      });
      await sendMessage(teke_res.data.id);

      console.log("Hello", teke_res.data.id);
      ToastAndroid.show("create course success !", ToastAndroid.SHORT);
      clear();
      navigation.navigate("Home", { screen: "Feed" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCourseName(req.map((i) => i.name).toString());
    setTimeStart(req.map((i) => i.time_start).toString());
    setTimeEnd(req.map((i) => i.time_end).toString());
    setDay(req.map((i) => i.date).toString());
    setCatagory(req.map((i) => i.categories.name).toString());
    setRequsetId(parseInt(req.map((i) => i.id).toString()));
  }, []);

  const changeImage = (courseAvatar) => {
    setRequireImage(courseAvatar.image);
    setCourseAvatar(courseAvatar.id);
  };

  return (
    <>
      {/* header */}
      <SafeAreaView style={styles.container} />
      <View style={styles.headerBar}>
        <Text style={styles.textHeader}>Create Course</Text>
      </View>
      <ScrollView style={styles.area}>
        <View style={styles.content}>
          <UploadImage />
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
            onTextChange={(text) => setCourseName(text)}
            value={catagory}
            editable={false}
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
              modal={[modalVisible, setModalVisible]}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => taked()}>
            <Text style={styles.title}>Create</Text>
          </TouchableOpacity>
          <View style={{ marginVertical: 10 }} />
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
          <TouchableOpacity
            onPress={() => changeImage(courseAvatars.analytics)}
          >
            <Image
              source={courseAvatars.analytics.image}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeImage(courseAvatars.directory)}
          >
            <Image
              source={courseAvatars.directory.image}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeImage(courseAvatars.electrician)}
          >
            <Image
              source={courseAvatars.electrician.image}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeImage(courseAvatars.geography)}
          >
            <Image
              source={courseAvatars.geography.image}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => changeImage(courseAvatars.growth)}>
            <Image source={courseAvatars.growth.image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(courseAvatars.heart)}>
            <Image source={courseAvatars.heart.image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeImage(courseAvatars.multimedia)}
          >
            <Image
              source={courseAvatars.multimedia.image}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(courseAvatars.nurse)}>
            <Image source={courseAvatars.nurse.image} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => changeImage(courseAvatars.stethoscope)}
          >
            <Image
              source={courseAvatars.stethoscope.image}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(courseAvatars.tube)}>
            <Image source={courseAvatars.tube.image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(courseAvatars.tooth)}>
            <Image source={courseAvatars.tooth.image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeImage(courseAvatars.notebook)}>
            <Image source={courseAvatars.notebook.image} style={styles.image} />
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
