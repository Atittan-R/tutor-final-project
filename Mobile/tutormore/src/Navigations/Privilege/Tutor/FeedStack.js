import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Feed, SearchRequest } from "../../../screens/TutorScreen"
import TakeCreateCourse from '../../../screens/TutorScreen/TakeCreateCourse';


const Stack = createStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Feed"
    >
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="SearchRequest" component={SearchRequest} />
      <Stack.Screen name="TakeCreateCourse" component={TakeCreateCourse} />

    </Stack.Navigator>

  )
}
export default FeedStack;
