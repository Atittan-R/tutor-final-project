import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import {Inbox} from "../../../screens/UserScreen"


const Stack = createStackNavigator();

const MeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Me"
        >
            <Stack.Screen name="Me" component={Inbox} />

        </Stack.Navigator>
    )
}
export default MeStack;