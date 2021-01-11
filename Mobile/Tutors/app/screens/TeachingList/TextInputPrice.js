import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../config/colors";

export const TextInputPrice = (props) => {
  const { value, label } = props;
  const [price, setPrice] = props.price;
  // const[valueText, setValueText] = props.valueText;
  return (
    <View style={styles.inputItem}>
      <Text style={{ flex: 0.35 }}>{label}</Text>
      <TextInput
        value={value}
        placeholder={"Enter price for your course"}
        style={styles.textInput}
        keyboardType={"numeric"}
        onChangeText={(text) => setPrice(text)}
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
