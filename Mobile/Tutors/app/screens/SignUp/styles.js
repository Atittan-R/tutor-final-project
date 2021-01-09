import { StyleSheet } from "react-native";
import Colors from "../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    padding: 5,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textContainer: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  textTitle: {
    fontSize: 30,
    fontStyle: "normal",
    color: colors.primary,
  },
  textOr: {
    flex: 1,
    textAlign: "center",
    margin: 30,
    // fontFamily: "HelveticaNeue",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 30,
    color: colors.gray,
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
    color: colors.primary,
  },
  btnWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
});
