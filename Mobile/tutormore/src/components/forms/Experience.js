import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../configs/Colors";
import { Picker } from "@react-native-community/picker";

export default function Experience(props) {
  const { selectedValue, onValueChange } = props;
  return (
    <View style={styles.inputItem}>
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
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  textDate: {
    backgroundColor: Colors.background,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    flex: 1,
  },
  drop: {
    flex: 1,
    fontSize: 16,
    color: Colors.secondary
  },
});
