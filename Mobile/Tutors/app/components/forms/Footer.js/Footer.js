import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../../config/colors";

export const Footer = ({ navigation }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("Course")}
      >
        <Icon name={"home"} type={"feather"} color={colors.secondary} />
        <Text style={styles.menuText}> Home </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Icon name={"layers"} type={"feather"} color={colors.secondary} />
        <Text style={styles.menuText}> Feed </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Icon
          name={"message-circle"}
          type={"feather"}
          color={colors.secondary}
        />
        <Text style={styles.menuText}> Chat </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("Notification")}
      >
        <Icon name={"bell"} type={"feather"} color={colors.secondary} />
        <Text style={styles.menuText}> Notify </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("MyProfile")}
      >
        <Icon name={"user"} type={"feather"} color={colors.secondary} />
        <Text style={styles.menuText}> Me </Text>
      </TouchableOpacity>
    </View>
  );
};
export const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: colors.white,
    elevation: 10,
  },
  menuButton: {
    paddingVertical: 10,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  menuText: {
    textAlign: "center",
    fontSize: 11,
    color: colors.secondary,
  },
});
