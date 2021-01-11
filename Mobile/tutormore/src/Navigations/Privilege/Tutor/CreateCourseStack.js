import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { CreateCourse, CourseDetail, TeachingList } from "../../../screens/TutorScreen"


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
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="TeachingList" component={TeachingList} />
    </Stack.Navigator>

  )
}
export default CreateCourseStack;
