import { Platform, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    textAlign: "center",
    color: colors.primary,
    padding: 30,
    fontSize: 30,
  },
  btnWrap: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  logo: {
    alignSelf: "center",
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  textWrap: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    // fontFamily: "HelveticaNeue",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 30,
    color: colors.gray,
  },
  btnItemWrap: {
    marginBottom: 20,
  },
  inputItem: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginBtnWrapper: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  forgotPassword: {
    // fontFamily: 'HelveticaNeue',
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    marginTop: 60,
  },
  footerWrapper: {
    position: "absolute",
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  footerText: {
    // fontFamily: 'HelveticaNeue',
    fontWeight: "400",
    fontSize: 14,
    color: colors.gray,
  },
  footerText2: {
    color: colors.primary,
  },
});
