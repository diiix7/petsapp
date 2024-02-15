import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const HomeStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
  main: {
    width: wp("95"),
    alignSelf: "center",
    height: hp("65"),
  },
});
export default HomeStyle;
