import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import Colors from "../../../config/Colors";

export default SecondaryInput = ({ placeHolder, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        secureTextEntry={true}
        style={styles.input}
        placeholder={placeHolder}
      />
      <View style={styles.eyeWrapper}>
        {/*<Image source={require("../../../assets/images/eye.png")} />*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: Colors.background,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    padding: 20,
  },
  eyeWrapper: {
    marginRight: 15,
  },
});
