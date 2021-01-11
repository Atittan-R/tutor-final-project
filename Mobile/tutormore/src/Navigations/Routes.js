import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationStack from "./AuthenticationStack";
import { PrivilegeUser, PrivilegeTutor } from "./Privilege";
import { useGlobalVar } from "../context/GlobalContex";
import { Text, View } from "react-native";

function SplashScreen({ param }) {
  return (
    <View>
      <Text>Loading...</Text>
      <Text>Loading...</Text>
      <Text>Loading...</Text>
      <Text>Loading...</Text>
      <Text>Loading...</Text>
      <Text>Loading...</Text>
      <Text>Loading...</Text>
      <Text>{param}</Text>
      <Text>Loading..</Text>
    </View>
  );
}

const renderingCheck = () => {
  const { authentication } = useGlobalVar();
  const [state, dispatch] = authentication;
  // Context API To get Current User
  // const curren_user = null;

  // const curren_user = {
  //   data: { username: "hongbao", email: "g@g.com", role: ["TUTOR"] },
  // };
  // const role_router = {
  //   TUTOR: <PrivilegeTutor />,
  //   USER: <PrivilegeUser />,
  // };

  // return curren_user ? ( role_router[curren_user.data.role] ) : ( <AuthenticationStack /> );

  return state.isLoading ? (
    SplashScreen(state.isLoading)
  ) : state.userToken == null ? (
    <AuthenticationStack />
  ) : (
    <PrivilegeUser />
  );
};

export default function Routes() {
  return <NavigationContainer>{renderingCheck()}</NavigationContainer>;
}
