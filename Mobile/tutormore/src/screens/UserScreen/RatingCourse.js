import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon, Rating } from "react-native-elements";
import Colors from "../../configs/Colors";

export default function RatingCourse({ navigation, route }) {
  const { id, name } = route.params;
  const [rating, setRating] = useState();

  saveRating = () => {
    console.log(rating);
  }
  return (
    <>
      <SafeAreaView style={styles.container} />
      <View style={styles.bar}>
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={{ color: Colors.secondary, marginRight: 10 }}
            onPress={() => navigation.pop()}>
            <Icon name="arrow-back-outline" type="ionicon" color={Colors.secondary} />
          </TouchableOpacity>
          <Text style={styles.title}>Rating</Text>
        </View>
        <TouchableOpacity
          style={styles.add}
          onPress={() => saveRating()}
        >
          <Icon name="check" type="material" color={Colors.secondary} />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image source={require('../../assets/course/notebook.png')} style={styles.image} />
          <View>
            <Text style={styles.textBold} numberOfLines={1}>{name}</Text>
            <Text style={styles.textGray} numberOfLines={1}>hello my description </Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <Rating
          ratingCount={5}
          fractions={1}
          startingValue={3.5}
          imageSize={50}

          showRating
          onFinishRating={(value) => setRating(value)}
          ratingTextColor={Colors.secondary}
          style={styles.center}
        />
      </View>
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
  card: {
    padding: 20,
    backgroundColor: Colors.white,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary
  },
  add: {
    backgroundColor: Colors.primary,
    marginRight: 20
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textBold: {
    color: Colors.secondary,
    fontWeight: "bold"
  },
  textGray: {
    color: "gray",
    fontSize: 12
  },
  line: {
    marginTop: 10,
    borderTopColor: Colors.gray,
    borderTopWidth: 1
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
