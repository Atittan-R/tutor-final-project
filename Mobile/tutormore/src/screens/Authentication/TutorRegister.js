import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TutorRegister({ navigation }) {
  return (
    <View>
      <Text>Tutor Register</Text>
      <Button
        title={"Course List"}
        onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({});
