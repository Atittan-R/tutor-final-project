import { Platform, StyleSheet, StatusBar } from "react-native";

import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewButton: {
    margin: 5,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  coverArea: {
    padding: 20,
    backgroundColor: colors.white,
  },
  viewItem: {
    margin: 5,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewTitle: {
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  buttonTake: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 250
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 20
  }
});
