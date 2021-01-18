import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  Modal
} from "react-native";
import { Icon } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import Colors from "../../configs/Colors";

export default function MyCourse({ navigation }) {
  const data = [
    { id: 1, name: "Pixels", course: "Database", date: "Mon Wed Fri", time: "17.0-21.0", duration: "1 month" },
    { id: 2, name: "Pao", course: "Com pro1", date: "Sun Mon Tue Wed Fri Sat", time: "17.0-21.0", duration: "1 month" },
    { id: 3, name: "Yumyum", course: "Data Com", date: "Everyday", time: "17.0-21.0", duration: "1 month" },
    { id: 4, name: "Qbix", course: "HCI", date: "Mon Wed Fri", time: "17.0-21.0", duration: "1 month" },
    { id: 5, name: "Bankza", course: "Math for Com", date: "Mon Wed Fri", time: "17.0-21.0", duration: "1 month" },
  ];
  const [modalVisible, setModalVisible] = useState(false);
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
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CourseDetail", { course: item })}
            style={styles.button}
            key={item.id}>
            <View style={styles.card}>
              <Image source={{ uri: "https://source.unsplash.com/random" }} style={styles.image} />
              <View style={{ flex: 1, marginLeft: 10, justifyContent: "flex-start", alignItems: "flex-start" }} >
                <Text numberOfLines={1} style={styles.title}>{item.course}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon name="calendar-today" type="material" color="gray" size={15} />
                  <Text style={styles.textGray}>{item.time}</Text>
                  <Icon name="schedule" type="material" color="gray" size={15} />
                  <Text style={styles.textGray}>{item.date}</Text>
                </View>
                <View style={styles.qrcode}>
                  <TouchableOpacity
                    onPress={() => navigation.push("QrCode", { id: item.id, name: item.name })}>
                    <QRCode value={item.name} size={20} color={Colors.secondary} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )} />
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
