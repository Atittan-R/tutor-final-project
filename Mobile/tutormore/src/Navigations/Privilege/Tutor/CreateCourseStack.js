import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { CreateCourse, CourseDetail } from "../../../screens/TutorScreen"


const Stack = createStackNavigator();

const CreateCourseStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CreateCourse"
    >
      <Stack.Screen name="CreateCourse" component={CreateCourse} />

    </Stack.Navigator>

  )
}
export default CreateCourseStack;
