import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeTutor, SearchCourse, Feed, SearchRequest, TakeCreateCourse } from "../../../screens/TutorScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Feed"
    >
      {/* <Stack.Screen name="Home" component={HomeTutor} />
      <Stack.Screen name="SearchCourse" component={SearchCourse} /> */}
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="SearchRequest" component={SearchRequest} />
      <Stack.Screen name="TakeCreateCourse" component={TakeCreateCourse} />
    </Stack.Navigator>
  );
};

export default HomeStack;
