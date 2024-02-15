import { View, Text, ScrollView } from "react-native";
import HomeStyle from "./Home.style.js";
import { useNavigation } from "@react-navigation/native";
import HeaderBox from "../../components/HeaderBox/HeaderBox.js";

const Home = (props) => {
  const renderElement = () => {
    return (
      <View>
        <Text>a</Text>
      </View>
    );
  };
  return (
    <View style={HomeStyle.view}>
      <HeaderBox />
      <View style={HomeStyle.main}>
        <ScrollView>{renderElement()}</ScrollView>
      </View>
    </View>
  );
};
export default Home;
