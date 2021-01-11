import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../../config/colors";
import { useNavigation } from "@react-navigation/native";

export const ButtonNoStyle = (props) => {
  const { label, screenName } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        title={label}
        onPress={() => navigation.navigate(screenName)}
      >
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
    backgroundColor: "#BAE367",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  label: {
    textAlign: "center",
    color: colors.white,
  },
});
