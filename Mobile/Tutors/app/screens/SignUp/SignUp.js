import CheckBox from "@react-native-community/checkbox";
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Button } from "react-native";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { SecondaryButton } from "../../components/buttons/SecondaryButton/SecondaryButton";
import { PrimaryInput } from "../../components/forms/PrimaryInput/PrimaryInput";
import { styles } from "./styles";
import { colors } from "../../config/colors";
import  axios from 'axios';


const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const sign = async () => {
    console.log('==================email==================');
    console.log(email);
    console.log('====================================');
    console.log('==================password==================');
    console.log(password);
    console.log('====================================');
    console.log('==================username==================');
    console.log(username);
    console.log('====================================');
 
    // axios.post("localhost:3986/api/auth/signup", { email: email, password: password, username: username })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

  }
  // useEffect(() => {
  //   if(email&&username&&password!=null)
  //   axios.post("localhost:3986/api/auth/signup",{email:email,password:password,username:username})
  // }, [email,username,password])
  // useEffect(() => {

  // const x=axios.get('localhost:3986/api/user/findAll')
  // console.log('====================================');
  // console.log(x);
  // console.log('====================================');
  // })
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
            <PrimaryInput placeHolder={"Email Address"} value={email} setValue={setEmail} />
          </View>
          <View style={styles.inputItem}>
            <PrimaryInput placeHolder={"Username"} value={username} setValue={setUsername} />
          </View>
          <View style={styles.inputItem}>
            <PrimaryInput placeHolder={"Password"} value={password} setValue={setPassword} />
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
          <Button onPress={sign} title="signup"></Button>
          {/* <PrimaryButton label={"Sign Up"} screenName={"Login"} /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
