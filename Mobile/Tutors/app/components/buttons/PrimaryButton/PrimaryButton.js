import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../../config/colors";
import { useNavigation } from "@react-navigation/native";

export const PrimaryButton = (props) => {
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
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
  label: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    color: colors.white,
    // fontFamily: "HelveticaNeue",
    padding: 20,
  },
});
