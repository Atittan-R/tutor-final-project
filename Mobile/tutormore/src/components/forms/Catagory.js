import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../configs/Colors";
import { Picker } from "@react-native-community/picker";

export default function Catagory() {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.inputItem}>
      <Text style={{ flex: 0.35, color: Colors.secondary }} >Catagory </Text>
      <View style={styles.textDate}>
        <Picker
          selectedValue={selectedValue}
          style={styles.drop}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="select" value="select" />
          <Picker.Item label="Agricultural Technology" value="Agricultural Technology" />
          <Picker.Item label="Engineering" value="Engineering" />
          <Picker.Item label="Medicine" value="Medicine" />
          <Picker.Item label="Science" value="Science" />
          <Picker.Item label="Social Technology" value="Social Technology" />
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
