import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const screenWidth = Dimensions.get("screen").width;

const HomeStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
  main: {
    alignSelf: "center",
    height: hp("65"),
  },
  image: {
    width: screenWidth / 2.2,
    height: 250,
    borderRadius: 8,
  },
  item: {
    margin: 5,
  },
  click: {
    flexDirection: "row",
    alignSelf: "center",
    //backgroundColor: "lightgray",
    backgroundColor: "rgba(211, 211, 211, 0.4)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 0.6,
    position: "absolute",
    top: 210,
    borderColor: "gray",
  },
  elemtop: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    top: 15,
    position: "absolute",
  },
  check: {},
  elemtxt: {
    fontSize: 18,
    color: "gray",
  },
});
export default HomeStyle;
