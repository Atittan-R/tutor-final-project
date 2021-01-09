import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthenticationStack from "./AuthenticationStack";
import { PrivilegeUser, PrivilegeTutor } from "./Privilege";
import { useGlobalVar } from "../context/GlobalContex";
import { Text, View } from "react-native";

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

function AskingRole() {
  return (
    <View>
      <Text>AskingRole...</Text>
      <Text>AskingRole...</Text>
      <Text>AskingRole...</Text>
      <Text>AskingRole...</Text>
      <Text>AskingRole...</Text>
      <Text>AskingRole...</Text>
      <Text>AskingRole...</Text>
    </View>
  );
}
const renderingCheck = () => {
  const { authentication, current_user } = useGlobalVar();
  const [currentuser, setUserInfo] = current_user;
  const [state, dispatch] = authentication;
  
  const role_router = {
    ROLE_TUTOR: <PrivilegeTutor />,
    ROLE_USER: <PrivilegeUser />,
  };

  state.isLoading && SplashScreen();

  return state.userToken === null ? (
    <AuthenticationStack />
  ) : currentuser.roles.length !== 1 ? (
    AskingRole()
  ) : (
    role_router[currentuser.roles]
  );
};

export default function Routes() {
  return <NavigationContainer>{renderingCheck()}</NavigationContainer>;
}
