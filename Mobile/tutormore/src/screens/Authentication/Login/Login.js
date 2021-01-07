import React, { useState, useEffect } from "react";
import { AsyncStorage, Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryInput from "../../../components/forms/PrimaryInput";
import { useGlobalVar } from "../../../context/GlobalContex";
import { styles } from "./styles";

export default function Login({ navigation }) {
  const { autho } = useGlobalVar();
  const { authentication } = useGlobalVar();
  const [state, dispatch] = authentication;

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        // Restoring token failed
        console.log("Restoring token failed: ", error);
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/Appicon.png")}
      />
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
          <PrimaryButton
            label={"LOG IN"}
            onPress={() => autho.signIn({ email, password })}
          />
        </View>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>

      <View style={styles.footerWrapper}>
        <Text style={styles.footerText}>
          <Text style={styles.footerText1}>ALREADY HAVE AN ACCOUNT? </Text>
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
