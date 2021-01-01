import { Platform, StyleSheet, StatusBar } from "react-native";

import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: colors.bg,
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
    backgroundColor: colors.red,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 20,
  }
});
