import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../../configs/Colors";

export default function CourseDetail({ navigation }) {
  const data = ["Database", "Mon Wed Fri", "17.0-21.0", "1 Month", "21/30"];
  const [date, setDateNow] = useState(new Date());
  const [duration, setDuration] = useState(3);
  const [price, setPrice] = useState(300);

  return (
    <>
      <SafeAreaView style={styles.container} />
      <View style={styles.view}>
        <Image
          source={require(`../../assets/Appicon.png`)}
          style={styles.image}
        />
      </View>
      <View style={styles.barTitle}>
        <Text style={{ marginLeft: 20 }}>Details</Text>
      </View>
      <View style={styles.viewItem}>
        <Text>Course</Text>
        <Text>Course</Text>
      </View>
      <View style={styles.viewItem}>
        <Text>Date</Text>
        <Text>Course</Text>
      </View>
      <View style={styles.viewItem}>
        <Text>Time</Text>
        <Text>Course</Text>
      </View>
      <View style={styles.viewItem}>
        <Text>Duraton</Text>
        <Text>Course</Text>
      </View>
      <View style={styles.viewItem}>
        <Text>Amount</Text>
        <Text>Course</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
  view: {
    justifyContent: "center",
    flexDirection: "row",
  },
  barTitle: {
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  viewItem: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
});
