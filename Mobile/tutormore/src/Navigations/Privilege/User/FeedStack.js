import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Feed } from "../../../screens/UserScreen"


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


        </Stack.Navigator>

    )
}
export default FeedStack;
