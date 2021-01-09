import { Platform, StyleSheet, StatusBar } from "react-native";

import Colors from "../../config/colors";

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginHorizontal: 20,
  },
  modalView: {
    margin: 0,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    alignItems: "stretch",
    elevation: 2,
  },
  closeButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  modalViewText: {
    padding: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
    flexWrap: "wrap",
    // alignItems:"stretch"
  },
  inputStyleHeard: {
    fontWeight: "bold",
    marginLeft: 20,
    flex: 0.25,
    color: colors.second,
  },
  inputStyle: {
    marginLeft: 20,
    flex: 1,
    color: colors.second,
  },
});
