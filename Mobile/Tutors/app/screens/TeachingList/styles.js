import { Platform, StyleSheet, StatusBar } from "react-native";

import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewItem: {
    margin: 5,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
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
  textNormal: {
    color: colors.second,
  },
  textTitle: {
    color: colors.second,
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonEdit: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 20,
  },
  buttonDelete: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 20,
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
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 2,
  },
  closeButton: {
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 2,
  },
  textStyle: {
    color: colors.second,
    textAlign: "center"
  },
});
