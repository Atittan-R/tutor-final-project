import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    CourseEnroll,
    Home,
    CourseDetail,
    MyCourse,
    Search, test,
} from "../../../screens/UserScreen";
import LoadingScreen from "../../../components/Loading";
import {useGlobalVar} from "../../../context/GlobalContex";

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
      <Stack.Screen name="test" component={test} />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{
          headerTitle: "Register",
        }}
      />
      <Stack.Screen
        name="MyCourse"
        component={MyCourse}
        options={{
          headerTitle: "MyCourse",
        }}
      />
      <Stack.Screen
        name="CourseEnroll"
        component={CourseEnroll}
        options={{
          headerTitle: "Course Registration",
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: "Search",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
