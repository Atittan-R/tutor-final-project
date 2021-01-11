import { StyleSheet } from "react-native";
import Colors from "../../config/colors";

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewItem: {
    marginBottom: 5,
    flexDirection: "row",
    flex: 0,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewContent: {
    backgroundColor: colors.white,
    padding: 20,
  },
});
