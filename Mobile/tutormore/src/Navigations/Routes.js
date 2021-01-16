import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationStack from "./AuthenticationStack";
import { PrivilegeUser, PrivilegeTutor } from "./Privilege";
import { useGlobalVar } from "../context/GlobalContex";
import { AsyncStorage, Text, View } from "react-native";
import RoleSelection from "../screens/Authentication/RoleSelection";

function SplashScreen() {
    return (
        <View>
            <Text>Loading...</Text>
            <Text>Loading...</Text>
            <Text>Loading...</Text>
            <Text>Loading...</Text>
            <Text>Loading...</Text>
            <Text>Loading...</Text>
            <Text>Loading...</Text>
            <Text>Loading..</Text>
        </View>
    );
}

export const role_router = {
    ROLE_TUTOR: <PrivilegeTutor />,
    ROLE_USER: <PrivilegeUser />,
};

export const renderingCheck = (effect, deps) => {
    const { authentication, current_user, roleglobal, auth } = useGlobalVar();
    const [roleselection, setRoleSection] = roleglobal;
    const [state, dispatch] = authentication;

    //IF isLoading is true will be show Load Screen
    state.isLoading && SplashScreen();
    // useEffect(() => {
    //     const entryRoling = async () => {
    //         let entry
    //         try {
    //             entry = await AsyncStorage.getItem("entryRole");
    //         } catch (e) {
    //             entry = await AsyncStorage.setItem("entryRole", JSON.stringify("NoValue"));
    //         }
    //         dispatch({ type: "ROLE_ENTRY", role: entry })
    //     }
    //     entryRoling();
    // }, []);

    let { role } = "";
    roleselection !== undefined ? ({ role } = roleselection) : "";

    //after select role from <RoleSelection/>
    console.log("state.userToken: ", state.userToken)
    console.log("state.userRoles: ", state.userRoles)
    console.log("select role: ", state.userRole)
    console.log("state.userData: ", state.userData, "\n");

    // if (state.userToken === undefined || state.userToken === null) {
    //     return <AuthenticationStack />
    // } else if (state.userRoles.length !== undefined && state.userRoles.length == 2) {
    //     return <RoleSelection />
    // } else if (state.userRoles !== undefined && state.userRoles.length === 1) {
    //     return role_router[state.userRoles];
    // } else {
    //     // console.log(JSON.parse(state.userRole));
    //     return role_router[JSON.parse(state.userRole)];
    // }
    // };

    //Test UI with out login

    return state.userRole === null || state.userRole === undefined ? (
        <RoleSelection />
    ) : (
            role_router[role]
        );
};

export default function Routes() {
    return <NavigationContainer>{renderingCheck()}</NavigationContainer>;
    // return <NavigationContainer><AuthenticationStack /></NavigationContainer>;
}
