import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CourseEnroll,
  Home,
  CourseDetail,
  CourseSelect,
} from "../../../screens/UserScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{
          headerTitle: "Register",
        }}
      />
      <Stack.Screen
        name="CourseSelect"
        component={CourseSelect}
        options={{
          headerTitle: "Course Selection",
        }}
      />
      <Stack.Screen
        name="CourseEnroll"
        component={CourseEnroll}
        options={{
          headerTitle: "Course Registration",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
