import React from "react";
import { Text } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import TutorHomeStack from "./TutorHomeStack";

const Tabs = AnimatedTabBarNavigator();
const Tab = () => {
  return <Text>Home Hello User </Text>;
};
const TabTab = () => {
  return <Text>Home Hello User </Text>;
};
const TabTabTab = () => {
  return <Text>Home Hello User </Text>;
};
export default function TapRoute() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#2f95dc",
        inactiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen name="Home" component={TutorHomeStack} />
      <Tabs.Screen name="Chat" component={Tab} />
      <Tabs.Screen name="Notification" component={TabTab} />
      <Tabs.Screen name="Me" component={TabTabTab} />
    </Tabs.Navigator>
  );
}
