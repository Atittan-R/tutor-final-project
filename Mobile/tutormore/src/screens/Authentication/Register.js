import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import  PrimaryButton from "../../components/buttons/PrimaryButton";
import  SecondaryButton  from "../../components/buttons/SecondaryButton";
import  PrimaryInput  from "../../components/forms/PrimaryInput";

const Register = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cfpassword, setCfPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
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
          <Text style={styles.textOr}>Or Sign up with E-mail {email}</Text>

          <View style={styles.inputWrap}>
            <View style={styles.inputItem}>
              <PrimaryInput
                  placeHolder={"Email Address"}
                  onTextChange={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.inputItem}>
              <PrimaryInput
                  placeHolder={"Username"}
                  onTextChange={(text) => setUsername(text)}
              />
            </View>
            <View style={styles.inputItem}>
              <PrimaryInput
                  placeHolder={"Password"}
                  onTextChange={(text) => setPassword(text)}
                  secureTextEntry
              />
            </View>
            <View style={styles.inputItem}>
              <PrimaryInput
                  placeHolder={"Confirm Password"}
                  onTextChange={(text) => setCfPassword(text)}
                  secureTextEntry
              />
            </View>
            <View style={styles.inputItem}>
              <PrimaryInput
                  placeHolder={"Phone Number"}
                  onTextChange={(text) => setPhoneNumber(text)}
              />
            </View>
            <View style={styles.policy}>
              <Text style={styles.policyText}>
                I have read the{" "}
                <Text
                    style={styles.policyLink}
                    onPress={() => navigation.navigate("Register")}
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
            <PrimaryButton
                label={"Sign Up"}
                screenName={"Login"}
                // onPress={() => alert("hello")}
            />
          </View>
        </View>
      </ScrollView>
  );
};

export default Register;

import { StyleSheet } from "react-native";
import Colors  from "../../configs/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    padding: 5,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  textTitle: {
    fontSize: 30,
    fontStyle: "normal",
    color: Colors.primary,
  },
  textOr: {
    flex: 1,
    textAlign: "center",
    margin: 30,
    // fontFamily: "HelveticaNeue",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 30,
    color: Colors.gray,
  },
  inputWrap: {
    flex: 1,
    margin: 10,
  },
  inputItem: {
    flex: 1,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  policy: {
    flex: 1,
    flexDirection: "row",
  },
  policyText: {
    flex: 1,
    marginLeft: 18,
    marginTop: 5,
  },
  policyCheckBox: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  policyLink: {
    color: Colors.primary,
  },
  btnWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.white,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
