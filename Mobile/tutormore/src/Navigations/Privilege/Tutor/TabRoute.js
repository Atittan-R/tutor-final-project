import React from "react";
import { Text } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Icon } from "react-native-elements";
import Colors from "../../../configs/Colors";
import CreateCourseStack from "./CreateCourseStack";
import FeedStack from "./FeedStack";
import TutorHomeStack from "./TutorHomeStack";

const Tabs = AnimatedTabBarNavigator();
const Tab = () => {
  return <Text>Home Hello Tutor </Text>;
};
const TabTab = () => {
  return <Text>Home Hello Tutor </Text>;
};
const TabTabTab = () => {
  return <Text>Home Hello Tutor </Text>;
};
export default function TapRoute() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.secondary,
        inactiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen name="Home" component={TutorHomeStack}
        options={{
          tabBarIcon: () => (
            <Icon name="home" type="material" color={Colors.secondary} />
          )
        }} />
      <Tabs.Screen name="Feed Request" component={FeedStack} options={{
        tabBarIcon: () => (
          <Icon name="dynamic-feed" type="material" color={Colors.secondary} />
        )
      }} />
      <Tabs.Screen name="Create Course" component={CreateCourseStack}
        options={{
          tabBarIcon: () => (
            <Icon name="add-circle" type="material" color={Colors.secondary} />
          )
        }} />
      <Tabs.Screen name="Notification" component={TabTab}
        options={{
          tabBarIcon: () => (
            <Icon name="notifications" type="material" color={Colors.secondary} />
          )
        }} />
      <Tabs.Screen name="Me" component={TabTabTab}
        options={{
          tabBarIcon: () => (
            <Icon name="person" type="material" color={Colors.secondary} />
          )
        }} />
    </Tabs.Navigator>
  );
}
