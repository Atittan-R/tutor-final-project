import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryInput from "../../../components/forms/PrimaryInput";
import { useGlobalVar } from "../../../context/GlobalContex";
import { styles } from "./styles";

export default function Login({ navigation }) {
  const { auth, authentication } = useGlobalVar();
  const [state, dispatch] = authentication;
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let userData;
      let userRoles;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        userData = await AsyncStorage.getItem("userData");
        userRoles = await AsyncStorage.getItem("userRoles");
      } catch (error) {
        // Restoring token failed
        console.log("Restoring token failed: ", error);
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken , user: userData , r: userRoles});
      dispatch({type: "SET_LOADING", loading: false});
    };

    bootstrapAsync();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/Appicon.png")}
      />
      <Text style={styles.title}>SIGN IN</Text>
      <View styles={styles.contentContainer}>
        <View style={styles.btnWrap}>
          <SecondaryButton
            style={styles.btnItemWrap}
            label={"Continue With Facebook"}
            btnType={"FACEBOOK"}
            background={"dodgerblue"}
            fontColor={"white"}
          />
        </View>

        <Text style={styles.textWrap}>Or Sign in with E-mail</Text>
        <View style={styles.inputItem}>
          <PrimaryInput placeHolder={"Email Address"} onChangeText={setEmail} />
        </View>

        <View style={styles.inputItem}>
          <PrimaryInput
            placeHolder={"Password"}
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.loginBtnWrapper}>
          <PrimaryButton label={"LOG IN"} onPress={() => auth.signIn({ email, password })} disable={true}/>
        </View>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>

      <View style={styles.footerWrapper}>
        <Text style={styles.footerText}>
          <Text style={styles.footerText}>ALREADY HAVE AN ACCOUNT? </Text>
          <Text
            style={styles.footerText2}
            onPress={() => navigation.push("Register")}
          >
            SIGN UP
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
