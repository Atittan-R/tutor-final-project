import React from "react";
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Button,
} from "react-native";

import SplashScreen from "./app/screens/SplashScreen/SplashScreen";
import Login from "./app/screens/Login/Login";
import SignUp from "./app/screens/SignUp/SignUp";
import Major from "./app/screens/Major/Major";
import Require from "./app/screens/Require/Require";
import Maps from "./app/screens/Map/Map";
// eslint-disable-next-line no-unused-vars
import colors from "./app/config/colors";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";

const Root = createStackNavigator();

const Screen1 = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 1</Text>
    {/* <Text>Values passed from First page: {route.params.paramKey}</Text> */}
    {/* <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.push("Screen2");
      }}
    /> */}
    <Button
      title="Go to SplashScreen"
      onPress={() => {
        navigation.push("SplashScreen");
      }}
    />
    <Button
      title="Go to Login"
      onPress={() => {
        navigation.push("SplashScreen");
      }}
    />
    <Button
      title="Go to Sign Up"
      onPress={() => {
        navigation.push("SplashScreen");
      }}
    />
    <Button
      title="Go to Maps"
      onPress={() => {
        navigation.push("Maps");
      }}
    />
    <Button
      title="Go to Require"
      onPress={() => {
        navigation.navigate("Require");
      }}
    />
    <Button
      title="Go to Major"
      onPress={() => {
        navigation.push("Major");
      }}
    />
  </View>
);

const Screen2 = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 2</Text>
    <Button
      title="Go back"
      onPress={() => {
        navigation.pop("");
      }}
    />
  </View>
);

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Root.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
          initialName="SplashScreen"
        >
          <Root.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Root.Screen
            name="Major"
            component={Major}
            options={{ title: "Choose Your Major" }}
          />
          <Root.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ title: "Hello Screen" }}
          />
          <Root.Screen name="Maps" component={Maps} />
          <Root.Screen name="Screen1" component={Screen1} />
          <Root.Screen name="Screen2" component={Screen2} />
          <Root.Screen name="Require" component={Require} />
          <Root.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "" }}
          />
        </Root.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  screen: {
    marginTop: 40,
    alignItems: "center",
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
});
