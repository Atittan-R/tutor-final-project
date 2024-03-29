import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthenticationStack from "./AuthenticationStack";
import { PrivilegeTutor, PrivilegeUser } from "./Privilege";
import { useGlobalVar } from "../context/GlobalContex";
import RoleSelection from "../screens/Authentication/RoleSelection";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterTutor } from "../screens/UserScreen";
import registerForPushNotificationsAsync from "../services/NotificationsService";
import * as Notifications from "expo-notifications";
import API from "../services/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "../components/Loading";

export const role_router = {
    ROLE_USER: <PrivilegeUser />,
    ROLE_TUTOR: <PrivilegeTutor />,
};

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export const renderingCheck = () => {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;
    const [check, setCheck] = useState(null);
    const [loading, setLoading] = useState(false)
    let currentUser = JSON.parse(state.userData) || {}

    const notificationListener = useRef();
    const responseListener = useRef();
    const navigation = useNavigation();

    const sendToken = async (userid, token) => {
        return await API.post("/notification/token", {
            token: {
                user: userid,
                value: token
            }
        })
    }

    useEffect(()=>{
        const checkUser = async () => {
            setLoading(true)
            const store = await AsyncStorage.getItem("userData");
            const storeUser = JSON.parse(store)
            try {
                if (storeUser) {
                    console.log("Have user Store")
                    const res = await API.get("/user/findProfile/" + storeUser.id);
                    if (res.data === null) {
                        console.log("Remove Data")
                        await AsyncStorage.removeItem("userData");
                        await AsyncStorage.removeItem("userToken");
                        await AsyncStorage.removeItem("userRole");
                        await AsyncStorage.removeItem("userRoles");
                        setCheck(false);
                    } else {
                        console.log("set New User")
                        setCheck(res.data)
                    }
                }
                setLoading(false)
            } catch (e) {
                console.log(e)
                setLoading(false)
                setCheck(null);
            }
        }

        checkUser();
    }, [state.userData])

    useEffect(() => {
        registerForPushNotificationsAsync().then(async (token) => {
                const store = await AsyncStorage.getItem("userData");
                const storeUser = JSON.parse(store)
            if (storeUser.id && token) {
                await sendToken(storeUser.id, token);
                console.log("User:", storeUser.id, token)
            }
        }
        );
        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(
            (notification) => {
                if (origin === 'selected') {
                    if (notification.request.content.data.course) {
                        console.log("notification: ", notification.request.content.data.course);
                        // navigation.navigate("Home", {screen: "CourseDetail", params: {
                        //     course: notification.request.content.data.course
                        // }})
                        // navigation.navigate("Home",{screen:"TakeCreateCourse",params:{req:request.filter((i)=>i.id==requestId)}})
                    } else {
                        console.log("no course")
                    }
                } else {
                    console.log("receipt")
                }
            }
        );
        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(
            (response) => {
                console.log("response: ", response);
            }
        );
        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };

    }, []);
    // END useEffect

    if (loading) {
        return <LoadingScreen />
    }

    if (state.userData === null) {
        console.log(loading)
        return <AuthenticationStack />
    } else if (state.userData) {
        if (check) {
            // console.log("check",check)
            if (JSON.parse(state.userRoles).length > 1) {
                return (state.userRole == null ?
                    <RoleSelection /> :
                    role_router[state.userRole])
            } else {
                return role_router[JSON.parse(state.userRoles)];
            }
        } else {
            console.log("check ", check)
            return <AuthenticationStack />
        }
    }

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
                <RootStack.Screen name={"route"} component={renderingCheck} />
                <RootStack.Screen name={"RoleSelect"} component={RoleSelection} />
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