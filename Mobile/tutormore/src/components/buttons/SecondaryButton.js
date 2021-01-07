import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../../configs/Colors";

export default SecondaryButton = (props) => {
  const { label, background, btnType, fontColor } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.btn, { backgroundColor: background }]}>
        <Image
          style={styles.socialIcon}
          source={
            btnType === "FACEBOOK"
              ? require("../../assets/images/facebook.png")
              : require("../../assets/images/google.png")
          }
        />
        <Text style={[styles.label, { color: fontColor }]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  btn: {
    backgroundColor: Colors.facebookBg,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  label: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    color: Colors.white,
    // fontFamily: "HelveticaNeue",
    padding: 20,
    alignSelf: "center",
  },
  socialIcon: {
    position: "absolute",
    left: 30,
  },
});
