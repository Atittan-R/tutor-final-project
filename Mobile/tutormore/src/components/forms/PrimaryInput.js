import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import Colors from "../../configs/Colors";


export default PrimaryInput = (props) => {
  const { placeHolder, isValid, value, onChangeText, secureTextEntry, keyboardType, textContentType, autoCompleteType } = props;

  return (
      <View style={styles.textWrap}>
        <TextInput
            value={value}
            style={styles.input}
            placeholder={placeHolder}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            textContentType={textContentType}
            autoCompleteType={autoCompleteType}
        />

        <View style={styles.container}>
        <View style={styles.validityShowWrapper}>
          {isValid ? (
            <Image source={require("../../assets/images/checked.png")} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // fontFamily: "HelveticaNeue",
  },
  input: {
    padding: 15,
    fontSize: 16,
  },
  textWrap:{
    borderRadius: 20,
    backgroundColor: Colors.background,
  },
  validityShowWrapper: {
    marginRight: 15,
  },
});
