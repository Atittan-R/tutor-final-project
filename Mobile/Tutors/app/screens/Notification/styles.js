import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  viewItem: {
    margin: 0,
    flexDirection: "row",
    alignContent: "center"
  },
  coverArea: {
    padding: 20,
    backgroundColor: "#fff",
  },
  textHeader: {
    fontWeight: "bold",
    flex: 0.5
  },
  textNormal: {
    flex: 0.75,
  },
  imageProfile: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderColor: colors.primary,
  },
  buttonTake: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    elevation: 2,
    backgroundColor: colors.primary,

  },
  label: {
    textAlign: "center",
    color: colors.white,
    borderColor: "#20232a",
    borderRadius: 6,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: colors.white,
    elevation: 10
  },
  menuButton: {
    paddingVertical: 10,
    backgroundColor: colors.white,
    alignItems:"center",
  },
  menuText: {
    textAlign: "center",
    fontSize: 11,
    color:colors.second,
  },


})