import { StyleSheet } from "react-native";
import Colors from "../../config/colors";

export const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.white,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  btnWrap: { margin: 20 },
});
