import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../configs/Colors";
import { Picker } from "@react-native-community/picker";

export default function TermCourse(props) {
  const [selectedValue, setSelectedValue] = props.value
  return (
    <View style={styles.inputItem}>
      <Text style={{ flex: 0.35, color: Colors.secondary }} >Duration </Text>
      <View style={styles.textDate}>
        <Picker
          selectedValue={selectedValue}
          style={styles.drop}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="select" value="select" />
          <Picker.Item label="14 days" value="14 days" />
          <Picker.Item label="1 month" value="1 month" />
          <Picker.Item label="3 months" value="3 months" />
          <Picker.Item label="6 months" value="6 months" />
        </Picker>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  inputItem: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  textDate: {
    backgroundColor: Colors.background,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
    justifyContent: "space-between",
    color: Colors.secondary
  },
  drop: {
    height: 20,
    width: 200,
    justifyContent: "space-between",
    fontSize: 20,
    color: Colors.secondary
  },
});
