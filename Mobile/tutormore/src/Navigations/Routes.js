import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationStack from "./AuthenticationStack";
import { PrivilegeUser, PrivilegeTutor } from "./Privilege";
import { useGlobalVar } from "../context/GlobalContex";
import RoleSelection from "../screens/Authentication/RoleSelection";
import { createStackNavigator } from "@react-navigation/stack";

export const role_router = {
    ROLE_USER: <PrivilegeUser />,
    ROLE_TUTOR: <PrivilegeTutor />,
};

export const renderingCheck = () => {
    const { authentication } = useGlobalVar();
    const [state, dispatch] = authentication;

    //after select role from <RoleSelection/>
    // console.log("state.userRoles: ", state.userRoles)
    // console.log("state.userRole: ", state.userRole)
    // console.log("state.userData: ", state.userData, "\n");

    // if (state.userData === null) {
    //     return <AuthenticationStack />
    // } else if (state.userRole) {
    //     console.log("Hello ", state.userRole)
    //     return role_router[state.userRole]
    // } else if (JSON.parse(state.userRoles).length === 1) {
    //     return role_router[JSON.parse(state.userRoles)];
    // } else if (JSON.parse(state.userRoles).length === 2) {
    //     return <RoleSelection />
    // }
    return (state.userRole == null ?
        <RoleSelection /> :
        role_router[state.userRole])

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
                <RootStack.Screen name={"ROLE"} component={renderingCheck} />
                <RootStack.Screen name={"RoleSelect"} component={RoleSelection} />
            </RootStack.Navigator>
        </NavigationContainer>);
}