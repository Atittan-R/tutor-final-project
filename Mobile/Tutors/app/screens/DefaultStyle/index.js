import { StyleSheet, StatusBar, Platform } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
