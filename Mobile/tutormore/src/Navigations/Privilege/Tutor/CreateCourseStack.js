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
      initialRouteName="CreateCourseStack"
    >
      <Stack.Screen name="CreateCourse" component={CreateCourse} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
    </Stack.Navigator>

  )
}
export default CreateCourseStack;
