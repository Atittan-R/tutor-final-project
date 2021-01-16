import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  TutorRegister,
  Register,
  Major, RoleSelection,
} from "../screens/Authentication";

const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: "Login",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="Major"
        component={Major}
        options={{
          headerTitle: "Major Selection",
        }}
      />
      <Stack.Screen
        name="TutorRegister"
        component={TutorRegister}
        options={{
          headerTitle: "Tutor Registration",
        }}
      />
        <Stack.Screen
            name="RoleSelect"
            component={RoleSelection}
            options={{
                headerTitle: "RoleSelect",
            }}
        />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
