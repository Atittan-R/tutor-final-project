import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../configs/Colors";
import { Picker } from "@react-native-community/picker";

export default function Catagory(props) {
  const { selectedValue, onValueChange } = props;
  return (
    <View style={styles.inputItem}>
      <View style={styles.textDate}>
        <Picker
          selectedValue={selectedValue}
          style={styles.drop}
          onValueChange={onValueChange}
        >
          <Picker.Item label="Catagory" value={null} />
          <Picker.Item label="Agricultural Technology" value={1} />
          <Picker.Item label="Density" value={2} />
          <Picker.Item label="Engineering" value={3} />
          <Picker.Item label="Foreign Language" value={4} />
          <Picker.Item label="General Education" value={5} />
          <Picker.Item label="Information Technology" value={6} />
          <Picker.Item label="Management Technology" value={7} />
          <Picker.Item label="Medicine" value={8} />
          <Picker.Item label="Nurse" value={9} />
          <Picker.Item label="Public Health" value={10} />
          <Picker.Item label="Science" value={11} />

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
