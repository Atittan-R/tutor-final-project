import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Share,
  Button,
} from "react-native";
import Colors from "../../../config/colors";

export const ButtonShared = (props) => {
  const { label } = props;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "https://www.youtube.com/watch?v=cEeUFE6tRmQ&list=RDMMRWoW4TyecS4&index=27",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onShare} title={label} style={styles.btn}>
        <Text style={styles.label}>{label}</Text>
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 2,
  },
  label: {
    textAlign: "center",
    color: colors.white,
  },
});
