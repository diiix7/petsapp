import { View, Text, Pressable } from "react-native";
import LandingStyle from "./Landing.style.js";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Landing = (props) => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("BottomTabs");
  };

  return (
    <View style={LandingStyle.view}>
      <View style={LandingStyle.lottie}>
        <View style={LandingStyle.titles}>
          <Text style={LandingStyle.title}>Welcome to</Text>
          <Text style={LandingStyle.title2}>CanineCompanion</Text>
        </View>
        <LottieView
          source={require("../../assets/animations/dogs_animated.json")}
          autoPlay
          loop
          style={LandingStyle.lottiestyle}
        />
      </View>

      <Pressable onPress={handleContinue} style={LandingStyle.button}>
        <Text style={LandingStyle.buttonLabel}>GET STARTED</Text>
      </Pressable>
    </View>
  );
};
export default Landing;
