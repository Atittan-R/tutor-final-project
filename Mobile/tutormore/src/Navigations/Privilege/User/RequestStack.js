import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Request } from "../../../screens/UserScreen"


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

        </Stack.Navigator>

    )
}
export default RequestStack;
