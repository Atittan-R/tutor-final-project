import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Image } from "react-native";
import { colors } from "../../../config/colors";

export const PrimaryInput = (props) => {
  const { placeHolder, isValid ,value,setValue} = props;
  

  return (
    <View style={styles.container}>
      <TextInput value={value} style={styles.input} placeholder={placeHolder} onChangeText={(text)=>{setValue(text)}} />
      <View style={styles.validityShowWrapper}>
        {isValid ? (
          <Image source={require("../../../assets/images/checked.png")} />
        ) : null}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.background,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // fontFamily: "HelveticaNeue",
  },
  input: {
    padding: 15,
    fontSize: 16,
  },
  validityShowWrapper: {
    marginRight: 15,
  },
});
