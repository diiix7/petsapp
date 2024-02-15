import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const HeaderBoxStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
  headerbox: {
    backgroundColor: "chocolate",
    width: "100%",
    height: hp("25"),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: wp("4"),
  },
  headerboxline1: {
    flexDirection: "row",
    top: 50,
    justifyContent: "space-between",
  },
  headerboxtxt: {
    fontSize: 26,
  },
  headerboxline2: {
    top: 90,
    backgroundColor: "lightgray",
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: "row",
  },
  searchlogo: {
    left: 10,
  },
  searchzone: {
    left: 20,
    width: wp("75"),
    fontSize: 16,
  },
});
export default HeaderBoxStyle;
