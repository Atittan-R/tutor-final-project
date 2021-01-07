import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CourseEnroll({ navigation }) {
  return (
    <View>
      <Text>Course Enroll</Text>
      <Button
        title={"Go to Home"}
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
