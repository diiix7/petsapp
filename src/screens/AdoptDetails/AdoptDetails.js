import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import AdoptDetailsStyle from "./AdoptDetails.style.js";
import { FontAwesome, Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderBox from "../../components/HeaderBox/HeaderBox.js";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AdoptDetails = (props) => {
  const route = useRoute();
  const { id } = route.params;

  const [selectedElement, setSelectedElement] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRetrieved = await AsyncStorage.getItem("dataStored");
        if (dataRetrieved !== null) {
          const dataConvert = JSON.parse(dataRetrieved);
          const selected = dataConvert.find((element) => element.id === id);
          setSelectedElement(selected);
        }
      } catch (error) {
        console.error("Error featching data from local storage: ", error);
      }
    };

    fetchData();
  }, []);

  const [wishlist, setWishlist] = useState(false);

  return (
    <View style={AdoptDetailsStyle.view}>
      <HeaderBox screenName="adopt" selectedItem={`${id}`} />
      <ScrollView style={AdoptDetailsStyle.main}>
        <View style={AdoptDetailsStyle.infosline}>
          <Text style={AdoptDetailsStyle.infotxt}>{selectedElement.name}</Text>
        </View>
        <Text style={AdoptDetailsStyle.period}>One month</Text>
        <View style={AdoptDetailsStyle.adoptline}>
          <Text style={AdoptDetailsStyle.adopttxt}>Adoption fees: </Text>
          <Text style={AdoptDetailsStyle.adopttxt}>$ 220.0</Text>
        </View>
        <View style={AdoptDetailsStyle.infos2line}>
          <Text style={AdoptDetailsStyle.infos2txt}>More Informations</Text>
        </View>
        <View style={AdoptDetailsStyle.infos3line}>
          <Text style={AdoptDetailsStyle.infos3txt}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.Lorem ipsum
            dolor sit amet consectetur adipiscing elit.Lorem ipsum dolor sit
            amet consectetur adipiscing elit.Lorem ipsum dolor sit amet
            consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur
            adipiscing elit.
          </Text>
        </View>
        <View style={AdoptDetailsStyle.infos4line}>
          <Pressable
            onPress={() => setWishlist(!wishlist)}
            style={AdoptDetailsStyle.like}
          >
            <AntDesign
              name={"heart"}
              size={30}
              color={wishlist ? "chocolate" : "black"}
            />
          </Pressable>
          <Pressable
            onPress={() => setWishlist(!wishlist)}
            style={[
              AdoptDetailsStyle.liket,
              wishlist ? AdoptDetailsStyle.back1 : AdoptDetailsStyle.back2,
            ]}
          >
            <Text
              style={[
                AdoptDetailsStyle.liketxt,
                wishlist ? AdoptDetailsStyle.back1 : AdoptDetailsStyle.back2,
              ]}
            >
              ADD TO WISHLIST
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdoptDetails;
