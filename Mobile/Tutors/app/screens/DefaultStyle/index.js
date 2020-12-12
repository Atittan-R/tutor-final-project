import { StyleSheet } from "react-native";

export default StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
