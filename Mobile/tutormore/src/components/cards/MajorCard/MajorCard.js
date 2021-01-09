import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Colors from "../../../configs/Colors";


export default function MajorCard(props) {
  const { majorName, selected, onPress } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={selected ? styles.selected : styles.box}
        onPress={onPress}
      >
        <Image
          style={styles.logo}
          source={require("../../../assets/Appicon.png")}
        />
        <Text style={styles.title}>{majorName}</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 173,
    paddingTop: 50,
    padding: 20,
    margin: 3,
  },
  title: {
    fontSize: 50,
  },
  logo: {
    width: 100,
    height: 100,
    flex: 1,
    position: "absolute",
    top: -50,
  },
  box: {
    backgroundColor: Colors.white,
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  selected: {
    backgroundColor: Colors.primary,
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
