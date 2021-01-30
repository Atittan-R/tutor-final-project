import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Request, Matching } from "../../../screens/UserScreen"


const Stack = createStackNavigator();

const RequestStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Feed"
        >
            <Stack.Screen name="Request" component={Request} />
            <Stack.Screen name="Matching" component={Matching} />
        </Stack.Navigator>

    )
}
export default RequestStack;
