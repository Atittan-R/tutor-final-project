import { Platform, StyleSheet, StatusBar } from "react-native";
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputItem: {
    margin: 20,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  loginBtnWrapper: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#BAE367",
    borderRadius: 30,
    paddingHorizontal: 70,
    paddingVertical: 20,
    elevation: 2,
    
  },
  textStyle: {
    color: "white",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  groupCheckBox: {
    alignContent:"stretch",
    alignItems: "stretch",
    backgroundColor: "#fff",
    paddingBottom: 20,

    
  },

});
