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
import { Icon, Rating } from "react-native-elements";
import Colors from "../../configs/Colors";

export default function TeachingList({ navigation }) {
  const data = [
    { id: 1, course: "Database", date: "Mon Wed Fri", time: "17.0-21.0", duration: "1 month", rate: 4.8 },
    { id: 2, course: "Com pro1", date: "Sun Mon Tue Wed Fri Sat", time: "17.0-21.0", duration: "1 month", rate: 1.8 },
    { id: 3, course: "Data Com", date: "Everyday", time: "17.0-21.0", duration: "1 month", rate: 4.5 },
    { id: 4, course: "HCI", date: "Mon Wed Fri", time: "17.0-21.0", duration: "1 month", rate: 2.6 },
    { id: 5, course: "Math for Com", date: "Mon Wed Fri", time: "17.0-21.0", duration: "1 month", rate: 3.7 },
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
          <TouchableOpacity
            onPress={() => navigation.push("CheckList", { id: item.id, course: item.course })}
            key={item.id}
          >
            <View style={styles.card}>
              <Image source={require("../../assets/Appicon.png")} style={styles.image} />
              <View style={styles.content}>
                <Text numberOfLines={1} style={styles.title}>{item.course}</Text>
                <View style={styles.contentRow}>
                  <Icon name="calendar-today" type="material" color="gray" size={15} />
                  <Text style={styles.textGray}>{item.time}</Text>
                  <Icon name="schedule" type="material" color="gray" size={15} />
                  <Text style={styles.textGray}>{item.date}</Text>
                </View>
                <View style={styles.contentRow}>
                  <Rating imageSize={15} startingValue={item.rate} ractions={5} ratingCount={1} />
                  <Text style={styles.textGray}>{item.rate}</Text>
                </View>
                <View style={styles.icon}>
                  {/* detail */}
                  <TouchableOpacity
                    // onPress={() => navigation.push("CourseDetail",{id:item.id, course:item.course})}
                    style={styles.button}>
                    <Icon name="chrome-reader-mode" type="material" color={Colors.secondary} size={15} />
                    <Text style={{ color: Colors.secondary, fontSize: 10 }}>Details</Text>
                  </TouchableOpacity>

                  {/* edit */}
                  <TouchableOpacity
                    style={styles.button}
                  // onPress={() => setModalVisible(true)}
                  >
                    <Icon name="edit" type="material" color={Colors.secondary} size={15} />
                    <Text style={{ color: Colors.secondary, fontSize: 10 }}>Edit</Text>
                  </TouchableOpacity>

                  {/* delete */}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      Alert.alert(
                        "Delete",
                        item.course + ", are you sure to delete?",
                        [
                          { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
                          { text: "OK", onPress: () => console.log("Cancel Pressed"), style: "cancel" }
                        ],
                        { cancelable: false }
                      )
                    }}
                  >
                    <Icon name="delete-outline" type="material" color={Colors.secondary} size={15} />
                    <Text style={{ color: Colors.secondary, fontSize: 10 }}>Delete</Text>
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
  icon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15
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
  button: {
    borderRadius: 30,
    marginRight: 5,
    marginTop: 5,
    paddingRight: 10,
    alignItems: "center"
  },
  content: {
    flex: 1, marginLeft: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center"
  }

});
