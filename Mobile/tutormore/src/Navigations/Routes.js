import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationStack from "./AuthenticationStack";
import {PrivilegeUser, PrivilegeTutor} from "./Privilege";
import {useGlobalVar} from "../context/GlobalContex";
import RoleSelection from "../screens/Authentication/RoleSelection";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from "../components/Loading";

export const role_router = {
    ROLE_USER: <PrivilegeUser/>,
    ROLE_TUTOR: <PrivilegeTutor/>,
};

export const renderingCheck = () => {
    const {authentication} = useGlobalVar();
    const [state, dispatch] = authentication;
    const [newRole, setNewRole] = useState(null);
    const {isLoading} = state;
    useEffect(() => {
        const entryRoling = async () => {
            let entry
            // let entryData
            try {
                entry = await AsyncStorage.getItem("entryRole");
                // entryData = await AsyncStorage.getItem("userData");
                setNewRole(entry)
            } catch (e) {
                entry = await AsyncStorage.setItem("entryRole", JSON.stringify("NoValue"));
            }
            dispatch({type: "ROLE_ENTRY", role: JSON.parse(entry)})
        }
        entryRoling();
    }, [state.userRole]);

    //after select role from <RoleSelection/>
    console.log("state.userRoles: ", state.userRoles)
    console.log("select role: ", state.userRole)
    console.log("state newRole: ", newRole)
    console.log("state.userData: ", state.userData, "\n");

    // if(isLoading===true){
    //     if(state.userData !== null){
    //         dispatch({type: "SET_LOADING", loading: false});
    //     }else{
    //     return <LoadingScreen />
    //     }
    // }else{
        if (state.userData === null) {
            return <AuthenticationStack/>
        } else if (JSON.parse(state.userRoles).length === 1) {
            return role_router[JSON.parse(state.userRoles)];
        } else if (JSON.parse(state.userRoles).length === 2 && newRole !== null) {
            // console.log(roleselection)
            return <RoleSelection/>
        } else {
            //TODO
            return role_router[state.userRole]
        }
    // }

};

//Test UI with out login

//     return state.userRole === null || state.userRole === undefined ? (
//         <RoleSelection/>
//     ) : (
//         role_router[state.userRole]
//     );
// };

export default function Routes() {
    return (
        <NavigationContainer>
            {renderingCheck()}
        </NavigationContainer>);
    // return <NavigationContainer><AuthenticationStack/></NavigationContainer>;
}
