import { Platform, StyleSheet, StatusBar } from "react-native";

import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewItem: {
    margin: 10,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  coverArea: {
    padding: 20,
    backgroundColor: "#fff",
  },
  textHeader: {
    fontWeight: "bold",
    flex: 0.5,
    color: colors.secondary,
  },
  textNormal: {
    flex: 0.8,
    color: colors.secondary,
  },
  imageProfile: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: "center",
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 0,
  },
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
