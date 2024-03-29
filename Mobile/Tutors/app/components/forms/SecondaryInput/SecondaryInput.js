import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import Colors from "../../../config/colors";

export const SecondaryInput = (props) => {
  const { placeHolder, value } = props;
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        secureTextEntry={true}
        style={styles.input}
        placeholder={placeHolder}
      />
      <View style={styles.eyeWrapper}>
        <Image source={require("../../../assets/images/eye.png")} />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.background,
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
