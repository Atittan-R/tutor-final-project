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
<<<<<<< HEAD
=======
  itemWrapper: {
    margin: 5,
    flexDirection: "row",
    flex: 0.6,
    flexWrap: "wrap",
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  pressStyle: {
    paddingVertical: 10,
    borderBottomColor: colors.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  groupCheckBox: {
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  alignCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#fff",
  },
>>>>>>> 5f73abcf88e4d80c6c50bbeaad85d62f99d321fb
  Global: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
  },
  textInput: {
<<<<<<< HEAD
    backgroundColor: colors.bg,
    borderRadius: 5,
=======
    backgroundColor: colors.background,
    borderRadius: 15,
>>>>>>> 5f73abcf88e4d80c6c50bbeaad85d62f99d321fb
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
  },
<<<<<<< HEAD

=======
  textDate: {
    backgroundColor: colors.background,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
    paddingVertical: 13,
    justifyContent: "space-between",
  },
  drop: {
    height: 20,
    width: 200,
    justifyContent: "space-between",
    fontSize: 20,
  },
  wrapText: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
>>>>>>> 5f73abcf88e4d80c6c50bbeaad85d62f99d321fb
});
