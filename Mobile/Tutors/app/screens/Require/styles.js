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
  itemWrapper: {
    margin: 5,
    flexDirection: "row",
    flex: 0.6,
    flexWrap: "wrap",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 0,
    backgroundColor: "#acc",
    borderRadius: 30,
    padding: 20,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,

  },
  openButton: {
    backgroundColor: "#BAE367",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 2,
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
    justifyContent:"flex-start",
    backgroundColor: "#fdf",
    paddingBottom: 20,
  },
  alignCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  Global: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
  },
  textInput: {
    backgroundColor: colors.bg,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
  },
  textDate: {
    backgroundColor: colors.bg,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
    paddingVertical: 13,
    // justifyContent: "space-between",
  },
  drop: {
    height: 20, 
    width: 200, 
    justifyContent: "space-between", 
    fontSize: 20
  },
  imageStyle: {
    width: 20,
    height: 20,
  
  },
  mySelf: {
    alignSelf: "flex-end",

  },
  wrapText:{
    flexDirection: "row",
    flexWrap: "wrap",
 
  }

});
