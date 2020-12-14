import React from "react";
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Button,
  Dimensions,
} from "react-native";

import SplashScreen from "./app/screens/SplashScreen/SplashScreen";
import Login from "./app/screens/Login/Login";
import SignUp from "./app/screens/SignUp/SignUp";
import Major from "./app/screens/Major/Major";
import Require from "./app/screens/Require/Require";
import colors from "./app/config/colors";

import { createStackNavigator } from "@react-navigation/stack";
import Require from "./app/screens/Require/Require";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";

const Root = createStackNavigator();

const Screen1 = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 1</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.push("Screen2");
      }}
    />
    <Button
      title="Go to SplashScreen"
      onPress={() => {
        navigation.push("SplashScreen");
      }}
    />
    <Button
      title="Require"
      onPress={() => {
        navigation.navigate("Require");
      }}
    />
    <Button
      title="Major"
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
  mapWrap: {
    width: "auto",
    height: 200,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
