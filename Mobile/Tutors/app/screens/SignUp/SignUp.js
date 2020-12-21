import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { SecondaryButton } from "../../components/buttons/SecondaryButton/SecondaryButton";
import { PrimaryInput } from "../../components/forms/PrimaryInput/PrimaryInput";
import { styles } from "./styles";
import { colors } from "../../config/colors";

const SignUp = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView style={{ margin: 0, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Sign Up</Text>
        </View>
        <View style={styles.btnWrapper}>
          <SecondaryButton
            label={"Sign Up With Facebook"}
            btnType={"FACEBOOK"}
            background={"dodgerblue"}
            fontColor={"white"}
          />
        </View>
        <Text style={styles.textOr}>Or Sign up with E-mail</Text>

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
          <View style={styles.policy}>
            <Text style={styles.policyText}>
              I have read the{" "}
              <Text
                style={styles.policyLink}
                onPress={() => navigation.navigate("SignUp")}
              >
                Private Policy
              </Text>
            </Text>
            <View style={styles.policyCheckBox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onCheckColor={"green"}
                tintColor={"red"}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
            </View>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <PrimaryButton label={"Sign Up"} screenName={"Login"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
