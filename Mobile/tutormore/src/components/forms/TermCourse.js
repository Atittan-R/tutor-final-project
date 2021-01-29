import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../configs/Colors";
import { Picker } from "@react-native-community/picker";

export default function TermCourse(props) {
  const [selectedValue, setSelectedValue] = props.value
  return (
    <View style={styles.inputItem}>
      <View style={styles.textDate}>
        <Picker
          selectedValue={selectedValue}
          style={styles.drop}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="select" value={0} />
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
