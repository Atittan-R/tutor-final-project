import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Me, MyCourse, QrCode, RatingCourse } from "../../../screens/UserScreen"


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
            <Stack.Screen
                name="MyCourse"
                component={MyCourse}
                options={{
                    headerTitle: "MyCourse",
                }}
            />
            <Stack.Screen
                name="QrCode"
                component={QrCode}
                options={{
                    headerTitle: "QrCode",
                }}
            />
            <Stack.Screen
                name="RatingCourse"
                component={RatingCourse}
                options={{
                    headerTitle: "RatingCourse",
                }}
            />
        </Stack.Navigator>
    )
}
export default MeStack;