import { Platform, StyleSheet, StatusBar } from "react-native";
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputItem: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    flex:1,
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
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
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
    borderRadius: 20,
    paddingHorizontal: 70,
    paddingVertical: 20,
    elevation: 2,
  },
  timeButton: {
    backgroundColor: "#BAE367",
    borderRadius: 20,
    paddingHorizontal: 70,
    paddingVertical: 5,
    flex:0.5,
  },
  closeButton: {
    backgroundColor: "#BAE367",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    elevation: 2,
    alignSelf: "flex-end",
    
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
  alignCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textTime:{
    fontSize: 16,

  }

});
