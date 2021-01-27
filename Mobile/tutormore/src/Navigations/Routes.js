import React,{useEffect, useRef} from "react";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import AuthenticationStack from "./AuthenticationStack";
import {PrivilegeTutor, PrivilegeUser} from "./Privilege";
import {useGlobalVar} from "../context/GlobalContex";
import RoleSelection from "../screens/Authentication/RoleSelection";
import {createStackNavigator} from "@react-navigation/stack";
import {RegisterTutor} from "../screens/UserScreen";
import registerForPushNotificationsAsync from "../services/NotificationsService";
import * as Notifications from "expo-notifications";
import API from "../services/API";

export const role_router = {
    ROLE_USER: <PrivilegeUser/>,
    ROLE_TUTOR: <PrivilegeTutor/>,
};

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export const renderingCheck = () => {
    const {authentication} = useGlobalVar();
    const [state, dispatch] = authentication;
    const currentUser = JSON.parse(state.userData);
    const notificationListener = useRef();
    const responseListener = useRef();
    const navigation = useNavigation();

    const sendToken = async (userid,token) =>{
        return await API.post("/notification/token", {
            token: {
                user: userid,
                value: token
            }
        })
    }
    useEffect( () =>  {
        registerForPushNotificationsAsync().then( async (token) => {
                // console.log(token, "UserData",currentUser.id,)
                if (currentUser.id && token) {
                    await sendToken(currentUser.id,token);
                    // console.log("User:",res.data)
                }
            }
        );
        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(
            (notification) => {
                const { origin } = notification;
                console.log(notification)

                if(origin === 'selected'){
                    if (notification.request.content.data.course) {
                        console.log("notification: ", notification.request.content.data.course);
                        // navigation.navigate("Home", {screen: "CourseDetail", params: {
                        //     course: notification.request.content.data.course
                        // }})
                        // navigation.navigate("Home",{screen:"TakeCreateCourse",params:{req:request.filter((i)=>i.id==requestId)}})
                    }else{
                        console.log("no course")
                    }
                }else{
                    console.log("receipt")
                }
            }
        );
        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(
            (response) => {
                // console.log("response: ", response);
            }
        );
        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };

    }, []);
    // END useEffect

    if (state.userData === null) {
        return <AuthenticationStack/>
    } else if (state.userRole) {
        return role_router[state.userRole]
    } else if (JSON.parse(state.userRoles).length === 1) {
        return role_router[JSON.parse(state.userRoles)];
    } else if (JSON.parse(state.userRoles).length === 2) {
        return <RoleSelection/>
    }
    // return (state.userRole == null ?
    //     <RoleSelection /> :
    //     role_router[state.userRole])

};

const RootStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Root">
                <RootStack.Screen name={"route"} component={renderingCheck}/>
                <RootStack.Screen name={"RoleSelect"} component={RoleSelection}/>
                <RootStack.Screen
                    name="RegisterTutor"
                    component={RegisterTutor}
                    options={{
                        headerTitle: "Register Tutor",
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>);
}