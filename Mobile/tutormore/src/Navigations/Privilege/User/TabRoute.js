import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import HomeStack from "./HomeStack";
import FeedStack from "./FeedStack";
import Colors from "../../../configs/Colors";
import MeStack from "./MeStack";
import { Icon } from "react-native-elements";
import RequestStack from "./RequestStack";

const Tabs = AnimatedTabBarNavigator();

export default function TapRoute() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        tabBarBackground: "#faa",
        activeBackgroundColor: Colors.primary,
        activeTabBackgrounds: Colors.secondary,
        activeTintColor: Colors.secondary,
        inactiveTintColor: Colors.secondary,
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack}
        options={{
          tabBarIcon: () => (
            <Icon name="home" type="material" color={Colors.secondary} />
          )
        }} />
      <Tabs.Screen name="Feed" component={FeedStack}
        options={{
            dotCornerRadius: 10,
          tabBarIcon: () => (
            <Icon name="dynamic-feed" type="material" color={Colors.secondary} />
          )
        }} />
      <Tabs.Screen name="Request" component={RequestStack}
        options={{
          tabBarIcon: () => (
            <Icon name="add-circle" type="material" color={Colors.secondary} />
          )
        }} />
      {/* <Tabs.Screen name="Notice" component={FeedStack} /> */}
      <Tabs.Screen name="Me" component={MeStack}
        options={{
          tabBarIcon: () => (
            <Icon name="person" type="material" color={Colors.secondary} />
          )
        }} />
    </Tabs.Navigator>
  );
}
