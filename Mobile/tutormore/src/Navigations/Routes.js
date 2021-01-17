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
    const [newRole, setNewRole] = useState(null);
    const { isLoading } = state;
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
            dispatch({ type: "ROLE_ENTRY", role: JSON.parse(entry) })
        }
        entryRoling();
    }, [state.userRole]);

    //after select role from <RoleSelection/>
    console.log("state.userRoles: ", state.userRoles)
    console.log("state.userRole: ", state.userRole)
    console.log("state.userData: ", state.userData, "\n");

    if (state.userData === null) {
        return <AuthenticationStack />
    } else if (state.userRole) {
        console.log("Hello ", state.userRole)
        return role_router[state.userRole]
    } else if (JSON.parse(state.userRoles).length === 1) {
        return role_router[JSON.parse(state.userRoles)];
    } else if (JSON.parse(state.userRoles).length === 2) {
        return <RoleSelection />
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
                <RootStack.Screen name={"ROLE"} component={renderingCheck} />
                <RootStack.Screen name={"RoleSelect"} component={RoleSelection} />
                <RootStack.Screen name={"ROLES"} component={renderingCheck} />
            </RootStack.Navigator>
        </NavigationContainer>);
}