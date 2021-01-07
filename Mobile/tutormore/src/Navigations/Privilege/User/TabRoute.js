import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import HomeStack from "./HomeStack";

const Tabs = AnimatedTabBarNavigator();

export default function TapRoute() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#2f95dc",
        inactiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      {/* <Tabs.Screen name="Feed" component={AuthenticationStack} /> */}
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
