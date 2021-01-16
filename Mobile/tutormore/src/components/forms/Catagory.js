import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../configs/Colors";
import { Picker } from "@react-native-community/picker";

export default function Catagory(props) {
  // const [selectedValue, setSelectedValue] = useState("");
  const { selectedValue, onValueChange } = props;
  return (
    <View style={styles.inputItem}>
      <Text style={{ flex: 0.35, color: Colors.secondary }} >Catagory </Text>
      <View style={styles.textDate}>
        <Picker
          selectedValue={selectedValue}
          style={styles.drop}
          onValueChange={onValueChange}
        >
          <Picker.Item label="select" value="select" />
          <Picker.Item label="Agricultural Technology" value="Agricultural Technology" />
          <Picker.Item label="Density" value="Density" />
          <Picker.Item label="Engineering" value="Engineering" />
          <Picker.Item label="Foreign Language" value="Foreign Language" />
          <Picker.Item label="General Education" value="General Education" />
          <Picker.Item label="Information Technology" value="Information Technology" />
          <Picker.Item label="Management Technology" value="Management Technology" />
          <Picker.Item label="Medicine" value="Medicine" />
          <Picker.Item label="Nurse" value="Nurse" />
          <Picker.Item label="Public Health" value="Public Health" />
          <Picker.Item label="Science" value="Science" />

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
