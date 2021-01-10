import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CourseEnroll,
  Home,
  CourseDetail,
  CourseSelect,
  Search,
} from "../../../screens/UserScreen";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

const Feed1 = () => {
  return (
    <View>
      <Text>Feed1</Text>
    </View>
  );
};
const Feed2 = () => {
  return (
    <View>
      <Text>Feed2</Text>
    </View>
  );
};

const FeedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Feed1" component={Feed1} />
      <Stack.Screen name="Feed2" component={Feed2} />
    </Stack.Navigator>
  );
};

export default FeedStack;
