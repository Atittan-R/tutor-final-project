import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Me, Scanner } from "../../../screens/TutorScreen"


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


    </Stack.Navigator>

  )
}
export default MeStack;
