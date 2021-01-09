import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CourseSelect({ navigation }) {
  return (
    <View>
      <Text>Course Select</Text>
      <Button
        title={"Course Enroll"}
        onPress={() => navigation.push("CourseEnroll")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
