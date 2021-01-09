import { StyleSheet } from "react-native";
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
    alignItems: "center",
  },
  coverArea: {
    padding: 20,
    backgroundColor: "#fff",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.white,
    paddingVertical: 5,
    elevation: 10,
  },
  menuButton: {
    paddingVertical: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingHorizontal: 140,
    borderRadius: 30,
  },
  menuText: {
    textAlign: "center",
    color: colors.white,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginHorizontal: 10,
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
  textInput: {
    margin: 4,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 20,
    flexWrap: "wrap",
    flex: 1,
  },
});
