import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../configs/Colors";
import { Picker } from "@react-native-community/picker";

export default function Catagory(props) {
  let { selectedValue, onValueChange, initLabel } = props;
  if(!initLabel){
    initLabel = "Category";
  }
  return (
    <View style={styles.inputItem}>
      <View style={styles.textDate}>
        <Picker
          selectedValue={selectedValue}
          style={styles.drop}
          onValueChange={onValueChange}
        >
          <Picker.Item label={initLabel} value={0} />
          <Picker.Item label="General Education" value={1} />
          <Picker.Item label="Management Technology" value={2} />
          <Picker.Item label="Engineering" value={3} />
          <Picker.Item label="Digital Technology" value={4} />
          <Picker.Item label="Science" value={5} />
          <Picker.Item label="Agricultural Technology" value={6} />
          <Picker.Item label="Foreign Languages" value={7} />
          <Picker.Item label="Medicine" value={8} />
          <Picker.Item label="Nurse" value={9} />
          <Picker.Item label="Dentistry" value={10} />
          <Picker.Item label="Public Health" value={11} />
        </Picker>
      </View>
    </View>
  );
}
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
    color: Colors.secondary,
  },
});
