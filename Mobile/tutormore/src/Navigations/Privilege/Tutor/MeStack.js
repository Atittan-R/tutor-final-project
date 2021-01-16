import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Me, Scanner } from "../../../screens/TutorScreen"
import {RoleSelection} from "../../../screens/Authentication";


const Stack = createStackNavigator();

const MeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Me"
    >
      <Stack.Screen name="Me" component={Me} />
      <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen
            name="RoleSelect"
            component={RoleSelection}
            options={{
                headerTitle: "RoleSelect",
            }}
        />

    </Stack.Navigator>

  )
}
export default MeStack;
