import { Dimensions, StatusBar } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
};
