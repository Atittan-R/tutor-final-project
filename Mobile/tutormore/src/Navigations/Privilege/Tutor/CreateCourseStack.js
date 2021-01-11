import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { CreateCourse } from "../../../screens/TutorScreen"


const Stack = createStackNavigator();

const CreateCourseStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Feed"
    >
      <Stack.Screen name="CreateCourse" component={CreateCourse} />

    </Stack.Navigator>

  )
}
export default CreateCourseStack;
