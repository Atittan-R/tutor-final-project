import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Me, MyCourse, QrCode, RatingCourse, CourseDetail2 } from "../../../screens/UserScreen"


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
            <Stack.Screen
                name="CourseDetail2"
                component={CourseDetail2}
                options={{
                    headerTitle: "CourseDetail2",
                }}
            />
        </Stack.Navigator>
    )
}
export default MeStack;