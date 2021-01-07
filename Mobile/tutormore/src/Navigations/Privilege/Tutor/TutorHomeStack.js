import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeTutor } from "../../../screens/TutorScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeTutor} />
    </Stack.Navigator>
  );
};

export default HomeStack;
