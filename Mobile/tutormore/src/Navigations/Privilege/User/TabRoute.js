import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import HomeStack from "./HomeStack";
import FeedStack from "./FeedStack";
import Colors from "../../../configs/Colors";
import MeStack from "./MeStack";
import { Icon } from "react-native-elements";

const Tabs = AnimatedTabBarNavigator();

export default function TapRoute() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        tabBarBackground: "#faa",
        activeTabBackgrounds: "#faa",
        activeTintColor: Colors.secondary,
        inactiveTintColor: "#faa",
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
          tabBarIcon: () => (
            <Icon name="dynamic-feed" type="material" color={Colors.secondary} />
          )
        }} />
      {/* <Tabs.Screen name="Notice" component={FeedStack} /> */}
      <Tabs.Screen name="Me" component={MeStack}
        options={{
          tabBarIcon: () => (
            <Icon name="person" type="material" color={Colors.secondary} />
          )
        }} />
      {/* <Tabs.Screen
        name="Chat"
        component={Home}
        options={{ tabBarIcon: () => <IconAssignments color="#56BBB4" /> }}
      />
      <Tabs.Screen
        name="Notification"
        component={Home}
        options={{ tabBarIcon: () => <IconAssignments color="#56BBB4" /> }}
      />
      <Tabs.Screen
        name="Me"
        component={Home}
        options={{ tabBarIcon: () => <IconGames color="#9DCC39" /> }}
      /> */}
    </Tabs.Navigator>
  );
}
