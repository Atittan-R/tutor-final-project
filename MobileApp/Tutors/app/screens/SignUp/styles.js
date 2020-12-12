import { Platform, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textTitle: {
    backgroundColor: "white",
    flex: 1,
  },
  btnItemWrap: {
    flex: 1,
  },
  textOr: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
  },
  inputWrap: {
    flex: 1,
  },
  inputItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  SignUpBtnWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
