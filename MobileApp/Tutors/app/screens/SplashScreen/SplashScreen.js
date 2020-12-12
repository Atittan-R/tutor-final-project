import React from "react";
import { View, Text, Image } from "react-native";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { styles } from "./styles";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bg}
        source={require("../../assets/images/bg1.png")}
      />
      <View style={styles.contentContainer}>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />
          <Image
            style={styles.welcomeImage}
            source={require("../../assets/images/enjoy.png")}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.heading}>We are what we do</Text>
          <Text style={styles.subHeading}>
            Thousand of people are usign silent moon for smalls meditation{" "}
          </Text>
          <View style={styles.btnWrapper}>
            <PrimaryButton label={"Sign Up"} screenName={"SignUp"} />
          </View>
          <Text style={styles.loginLinkWrapper}>
            <Text style={styles.notificationContent}>
              ALREADY HAVE AN ACCOUNT?
            </Text>{" "}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Login")}
            >
              LOG IN
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
