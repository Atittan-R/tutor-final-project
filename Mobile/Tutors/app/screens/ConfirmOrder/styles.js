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
  imageProfile: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignSelf: "center",
  },
  textProfile: {
    flex: 0.95,
  },
  imageItem: {
    width: 80,
    height: 80,
    borderRadius: 30,
    alignSelf: "center",
  },
  itemDetails: {
    flex: 0.95,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: colors.white,
    elevation: 10,
  },
  menuButton: {
    paddingVertical: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingHorizontal: 50,
  },
  menuText: {
    textAlign: "center",
    color: colors.white,
  },
  pressStyle: {
    borderBottomColor: colors.background,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderWidth: 0.5,
  },
});
