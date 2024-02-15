import { View, Text } from "react-native";
import LandingStyle from "./Landing.style.js";
import LottieView from "lottie-react-native";
import { Button } from "@rneui/themed";
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

      <Button
        buttonStyle={LandingStyle.button}
        uppercase={true}
        color={"success"}
        onPress={handleContinue}
        //disabled={}
        title={"GET STARTED"}
      />
    </View>
  );
};
export default Landing;
