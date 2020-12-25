import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { AirbnbRating } from "react-native-elements";
import { colors } from "../../../config/colors";


export default function ProductCard(props) {
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
        <AirbnbRating starContainerStyle={styles.rating}
                  size={10}
                  defaultRating={5}
                  isDisabled={true}
                  showRating={false}
                />
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
    fontSize: 30,
  },
  logo: {
    width: 100,
    height: 100,
    flex: 1,
    position: "absolute",
    top: -50,
  },
  box: {
    backgroundColor: colors.wh,
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  selected: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});