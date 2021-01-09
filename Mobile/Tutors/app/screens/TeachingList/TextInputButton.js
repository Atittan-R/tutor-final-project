import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../config/colors";

export const TextInputButton = (props) => {
  const { value, label } = props;
  const [valueText, setValueText] = props.valueText;
  // const[valueText, setValueText] = props.valueText;
  return (
    <View style={styles.inputItem}>
      <Text style={{ flex: 0.35 }}>{label}</Text>
      <TextInput
        value={value}
        placeholder={"Enter your course name"}
        style={styles.textInput}
        onChangeText={(text) => setValueText(text)}
      />
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
  textInput: {
    backgroundColor: colors.background,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
  },
});
