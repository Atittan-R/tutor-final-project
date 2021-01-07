import { StyleSheet } from "react-native";
import { colors } from "../../config/colors";

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
  menu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: colors.white,
    elevation: 10,
  },
  menuButton: {
    paddingVertical: 10,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  menuText: {
    textAlign: "center",
    fontSize: 11,
    color: colors.secondary,
  },
});
