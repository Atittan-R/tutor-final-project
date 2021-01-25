import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Icon, Rating } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import Colors from "../../../configs/Colors";
import { useGlobalVar } from "../../../context/GlobalContex";
import API from "../../../services/API";
import MyCoursePlaceholder from "./MyCoursePlaceholder";

export default function MyCourse({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState();
  const { authentication } = useGlobalVar();
  const [state, dispatch] = authentication;
  const currentUser = JSON.parse(state.userData);

  const [books, setBooks] = useState([...new Array(4).fill({})]);
  const fetchMyCourse = async () => {
    setLoading(true);
    try {
      const response = await API.get("enroll/history/" + currentUser.id);
      await setData(response.data);
      setLoading(false);
      // console.log(response.data.courseEnroll)
    } catch (e) {
      alert(e.response.data.message);
    }
  }
  useEffect(() => {
    fetchMyCourse()
  }, []);

  const renderPlaceholders = () =>
    books.map((e, i) => <MyCoursePlaceholder key={i} />);

  return (
    <>
      {/* header */}
      <SafeAreaView style={styles.container} />
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={{ color: Colors.secondary, marginRight: 10 }}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>My Course</Text>
      </View>

      {/* body */}
      {loading ? renderPlaceholders() :
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CourseDetail2", { course: item.id })}
              style={styles.button}
              key={item.id}>
              <View style={styles.card}>
                <Image source={{ uri: "https://source.unsplash.com/random" }} style={styles.image} />
                <View style={{ flex: 1, marginLeft: 10, justifyContent: "flex-start", alignItems: "flex-start" }}>
                  <Text numberOfLines={1} style={styles.title}>{item.name}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="calendar-today" type="material" color="gray" size={15} />
                    <Text style={styles.textGray}>{item.time_start + " - " + item.time_end}</Text>
                    <Icon name="schedule" type="material" color="gray" size={15} />
                    <Text style={styles.textGray}>{item.day}</Text>
                  </View>
                  <View style={styles.qrcode}>

                    <TouchableOpacity onPress={() => navigation.push("RatingCourse", { id: item.id, name: item.name })}>
                      <Icon name="star-outline" type="material" color={Colors.secondary} />
                      <Text style={styles.textBlack}>Rating</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: "center" }}
                      onPress={() => navigation.push("QrCode", {
                        id: currentUser.id,
                        name: currentUser.username
                      })}>
                      <QRCode value={[item.id + '/' + currentUser.id].toString()} size={20} color={Colors.secondary} />
                      <Text style={styles.textBlack}>QR Code</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )} />
      }
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
  card: {
    padding: 5,
    flexDirection: "row",
    marginHorizontal: 2,
    flexWrap: "wrap",
    backgroundColor: Colors.white
  },
  qrcode: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5
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
  title: {
    fontWeight: "bold",
    color: Colors.secondary
  },

});
