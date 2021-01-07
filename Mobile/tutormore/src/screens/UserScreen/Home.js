import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useGlobalVar } from "../../context/GlobalContex";

export default function Home({ navigation }) {
  const { autho } = useGlobalVar();
  return (
    <View>
      <Text>Home Hello User </Text>
      <Text>Home Hello User </Text>
      <Text>Home Hello User </Text>
      <Text>Home Hello User </Text>
      <Text>Home Hello User </Text>
      <Text>Home Hello User </Text>
      <Text>Home Hello User </Text>
      <Button
        title={"Course Detail"}
        onPress={() => navigation.push("CourseDetail")}
      ></Button>

      <View>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={autho.signOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
