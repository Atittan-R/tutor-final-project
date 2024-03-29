import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { SecondaryButton } from "../../components/buttons/SecondaryButton/SecondaryButton";
import { PrimaryInput } from "../../components/forms/PrimaryInput/PrimaryInput";
import { styles } from "./styles";
import axios from "axios";
const Login = ({ navigation }) => {
  useEffect(() => {
    axios.get('http://localhost:3986/api/user/findAll')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  })
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Appicon.png")} />
      <Text
        style={styles.title}
        // onPress={() => navigation.navigate("Screen1")}
      >
        Sign In
      </Text>
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
          <PrimaryInput placeHolder={"Email Address"} />
        </View>

        <View style={styles.inputItem}>
          <PrimaryInput placeHolder={"Password"} />
        </View>

        <View style={styles.loginBtnWrapper}>
          <PrimaryButton label={"LOG IN"} screenName={"Major"} />
        </View>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>

      <View style={styles.footerWrapper}>
        <Text style={styles.footerText}>
          <Text style={styles.footerText1}>ALREADY HAVE AN ACCOUNT? </Text>
          <Text
            style={styles.footerText2}
            onPress={() => navigation.navigate("SignUp")}
          >
            SIGN UP
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
