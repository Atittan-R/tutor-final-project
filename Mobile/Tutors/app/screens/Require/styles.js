import { Platform, StyleSheet, StatusBar } from "react-native";

import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputItem: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  inputItem2: {
    margin: 5,
    alignItems: "flex-end",
    backgroundColor: "#fff",
    flex: 1,
  },
  Global: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
  },
  textInput: {
    backgroundColor: colors.bg,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
  },

});
