import React from "react";
import { Text } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Icon } from "react-native-elements";
import Colors from "../../../configs/Colors";
import CreateCourseStack from "./CreateCourseStack";
import FeedStack from "./FeedStack";
import MeStack from "./MeStack";
import TutorHomeStack from "./TutorHomeStack";

const Tabs = AnimatedTabBarNavigator();

export default function TapRoute() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeBackgroundColor: Colors.primary,
        activeTabBackgrounds: Colors.secondary,
        activeTintColor: Colors.secondary,
        inactiveTintColor: Colors.secondary,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={TutorHomeStack}
        options={{
          tabBarIcon: () => (
            <Icon name="home" type="material" color={Colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name="Feed Request"
        component={FeedStack}
        options={{
          tabBarIcon: () => (
            <Icon
              name="dynamic-feed"
              type="material"
              color={Colors.secondary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Course"
        component={CreateCourseStack}
        options={{
          tabBarIcon: () => (
            <Icon name="add-circle" type="material" color={Colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name="Me"
        component={MeStack}
        options={{
          tabBarIcon: () => (
            <Icon name="person" type="material" color={Colors.secondary} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
