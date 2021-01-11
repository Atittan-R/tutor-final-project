import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function CourseDetail({ navigation }) {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Course Detail</Text>
        <Button
          title={"Course Select"}
          onPress={() => navigation.push("CourseSelect")}
        ></Button>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
