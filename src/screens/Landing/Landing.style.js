import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const LandingStyle = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  titles: {
    top: 75,
  },
  title: {
    fontSize: 20,
    top: 50,
    textAlign: "center",
  },
  title2: {
    fontSize: 30,
    top: 50,
    textAlign: "center",
  },
  lottiestyle: {
    width: 350,
    height: 350,
    top: hp("10"),
  },
  lottie: {
    alignSelf: "center",
  },
  button: {
    backgroundColor: "chocolate",
    width: 150,
    paddingVertical: 12,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 150,
  },
  buttonLabel: {
    textAlign: "center",
    fontSize: 26,
    color: "white",
  },
});
export default LandingStyle;
