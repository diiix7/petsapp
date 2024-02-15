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
    width: "100%",
    height: hp("42"),
    alignSelf: "center",
    top: hp("13"),
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: wp("5"),
  },
  infosline: {
    top: 20,
  },
  infotxt: {
    fontSize: 22,
  },
  period: {
    fontSize: 16,
    top: 35,
  },
  adoptline: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 60,
  },
  adopttxt: {
    fontSize: 22,
    fontWeight: "500",
  },
  infos2line: {
    top: 100,
  },
  infos2txt: {
    fontSize: 22,
    fontWeight: "500",
  },
  infos3line: {
    top: 125,
  },
  infos3txt: {
    fontSize: 16,
  },
  infos4line: {
    top: 170,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  like: {
    borderWidth: 1,
    borderColor: "black",
    width: 50,
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
  },
  liket: {
    alignItems: "center",
    paddingHorizontal: 15,
    padding: 5,
    borderRadius: 10,
    justifyContent: "center",
  },
  liketxt: {
    fontSize: 16,
  },
  back1: {
    backgroundColor: "chocolate",
    color: "white",
  },
  back2: {
    backgroundColor: "black",
    color: "white",
  },
});
export default AdoptDetailsStyle;
