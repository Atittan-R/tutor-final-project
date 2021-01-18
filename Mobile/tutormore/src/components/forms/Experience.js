import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../configs/Colors";
import { Picker } from "@react-native-community/picker";

export default function Experience(props) {
  const { selectedValue, onValueChange } = props;
  return (
    <View style={styles.inputItem}>
      <Text style={{ flex: 0.35, color: Colors.secondary }} >Experience</Text>
      <View style={styles.textDate}>
        <Picker
          selectedValue={selectedValue}
          style={styles.drop}
          onValueChange={onValueChange}
        >
          <Picker.Item label="select" value={null} />
          <Picker.Item label="None" value={1} />
          <Picker.Item label="Less than 1 year" value={2} />
          <Picker.Item label="1 year" value={3} />
          <Picker.Item label="2 years" value={4} />
          <Picker.Item label="More than 2 years" value={5} />
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
    paddingVertical: 13,
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
