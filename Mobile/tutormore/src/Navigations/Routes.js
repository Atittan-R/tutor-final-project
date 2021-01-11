import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthenticationStack from "./AuthenticationStack";
import {PrivilegeUser, PrivilegeTutor} from "./Privilege";
import {useGlobalVar} from "../context/GlobalContex";
import {AsyncStorage, Text, View} from "react-native";
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
    ROLE_TUTOR: <PrivilegeTutor/>,
    ROLE_USER: <PrivilegeUser/>,
};

export const renderingCheck =  () => {
    const {authentication, current_user, roleglobal} = useGlobalVar();
    const [roleselection] = roleglobal;
    const [currentuser, setUser] = current_user;
    const [state, dispatch] = authentication;
    //IF isLoading is true will be show Load Screen
    state.isLoading && SplashScreen();

    //access Object[roleselection]
    let {role} = "";
    roleselection !== undefined ? ({role} = roleselection) : "";

    // Use on product TODO
    return (state.userToken === null)
        ? <AuthenticationStack/>
        : currentuser.roles.length !== 1 ? (state.userRole === null || state.userRole === undefined)
                ? <RoleSelection/>
                : role_router[role]
        : role_router[currentuser.roles]
    }

    //Test UI with out login
//     return state.userRole === null || state.userRole === undefined ? (
//         <RoleSelection/>
//     ) : (
//         role_router[role]
//     );
// };

export default function Routes() {
    return <NavigationContainer>{renderingCheck()}</NavigationContainer>;
}
