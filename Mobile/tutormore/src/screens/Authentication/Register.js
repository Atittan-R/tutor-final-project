import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Register({navigation}) {
  return (
    <View>
      <Text>Register</Text>
      <Button title={"Major"} onPress={() => navigation.push("Major")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
