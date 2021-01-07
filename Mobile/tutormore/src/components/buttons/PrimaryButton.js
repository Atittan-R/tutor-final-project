import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../configs/Colors";

export default PrimaryButton = (props) => {
  const { label, onPress } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} title={label} onPress={onPress}>
        <Text style={styles.label}> {label} </Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
  },
  label: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    color: Colors.white,
    // fontFamily: "HelveticaNeue",
    padding: 20,
  },
});
