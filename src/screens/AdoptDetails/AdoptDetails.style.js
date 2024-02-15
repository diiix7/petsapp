import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const AdoptDetailsStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
  main: {
    width: "95%",
    height: hp("74"),
    alignSelf: "center",
    top: hp("13"),
  },
  petImage: {
    width: wp("95"),
    alignSelf: "center",
    height: 250,
    borderRadius: 8,
  },
  infosline: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 20,
  },
  infotxt: {
    fontSize: 22,
  },
  nameline: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 50,
  },
  nametxt: {
    fontSize: 22,
  },
});
export default AdoptDetailsStyle;
