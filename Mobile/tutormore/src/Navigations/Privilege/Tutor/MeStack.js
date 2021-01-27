import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Me, Scanner, TeachingList, CheckList, Attendance } from "../../../screens/TutorScreen"
import { RoleSelection } from "../../../screens/Authentication";
import EditCourse from "../../../screens/TutorScreen/EditCourse";

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
      <Stack.Screen name="TeachingList" component={TeachingList} />
      <Stack.Screen name="CheckList" component={CheckList} />
      <Stack.Screen name="EditCourse" component={EditCourse} />
      <Stack.Screen name="Attendance" component={Attendance} />
    </Stack.Navigator>

  )
}
export default MeStack;
