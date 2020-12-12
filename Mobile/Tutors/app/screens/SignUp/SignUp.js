import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { SecondaryButton } from "../../components/buttons/SecondaryButton/SecondaryButton";
import { PrimaryInput } from "../../components/forms/PrimaryInput/PrimaryInput";
import { styles } from "./styles";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textTitle}>
        <Text>Sign Up</Text>
      </View>
      <View style={styles.btnWrap}>
        <SecondaryButton
          style={styles.btnItemWrap}
          label={"Continue With Facebook"}
          btnType={"FACEBOOK"}
          background={"dodgerblue"}
          fontColor={"white"}
        />
      </View>
      <View style={styles.textOr}>
        <Text>Or Sign up with E-mail</Text>
      </View>
      <View style={styles.inputWrap}>
        <View style={styles.inputItem}>
          <PrimaryInput placeHolder={"Email Address"} />
        </View>
        <View style={styles.inputItem}>
          <PrimaryInput placeHolder={"Username"} />
        </View>
        <View style={styles.inputItem}>
          <PrimaryInput placeHolder={"Password"} />
        </View>
      </View>
      <View style={styles.SignUpBtnWrapper}>
        <PrimaryButton label={"Sign Up"} screenName={"Login"} />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
