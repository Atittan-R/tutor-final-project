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
import { QRCode } from "react-native-qrcode-svg";
import Colors from "../../configs/Colors";

export default function TeachingList({ navigation }) {
  const data = [
    { id: 1, course: "Database", date: "Mon Wed Fri", time: "17.0-21.0", duration: "1 month" },
    { id: 2, course: "Com pro1", date: "Sun Mon Tue Wed Fri Sat", time: "17.0-21.0", duration: "1 month" },
    { id: 3, course: "Data Com", date: "Everyday", time: "17.0-21.0", duration: "1 month" },
    { id: 4, course: "HCI", date: "Mon Wed Fri", time: "17.0-21.0", duration: "1 month" },
    { id: 5, course: "Math for Com", date: "Mon Wed Fri", time: "17.0-21.0", duration: "1 month" },
  ];
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
        <Text style={styles.textHeader}>Teaching List</Text>
      </View>

      {/* body */}
      <FlatList
        data={data}
        keyExtractor={(i) => i}
        renderItem={({ item }) => (
          <View style={styles.viewItem}>
            <Image source={require("../../assets/Appicon.png")} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.course}</Text>
              <Text style={styles.text}>{item.date}</Text>
              <Text style={styles.text}>{item.time}</Text>
              <Text style={styles.text}>{item.duration}</Text>
              <View style={styles.icon}>
                <TouchableOpacity
                  onPress={() => navigation.push("CourseDetail")}
                  style={styles.button}>
                  <Icon name="chrome-reader-mode" type="material" color={Colors.secondary} />
                  <Text style={{ color: Colors.secondary, fontSize: 10 }}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                // onPress={() => setModalVisible(true)}
                >
                  <Icon name="edit" type="material" color={Colors.secondary} />
                  <Text style={{ color: Colors.secondary, fontSize: 10 }}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
  viewItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: Colors.white
  },
  icon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  text: {
    color: Colors.secondary
  },
  title: {
    fontWeight: "bold",
    color: Colors.secondary
  },
  button: {
    // backgroundColor: Colors.primary,
    borderRadius: 30,
    marginRight: 5,
    marginTop: 5,
    // paddingHorizontal: 10,
    alignItems: "center"
  },

});
