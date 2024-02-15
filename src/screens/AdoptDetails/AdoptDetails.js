import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import AdoptDetailsStyle from "./AdoptDetails.style.js";
import { FontAwesome, Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderBox from "../../components/HeaderBox/HeaderBox.js";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import img from "../../assets/images/image.jpeg";

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

  return (
    <View style={AdoptDetailsStyle.view}>
      <HeaderBox screenName="adopt" selectedItem={`${id}`} />
      <ScrollView style={AdoptDetailsStyle.main}>
        <Image
          source={{ uri: selectedElement.image }}
          style={AdoptDetailsStyle.petImage}
        />
        <View style={AdoptDetailsStyle.infosline}>
          <View style={{ justifyContent: "center" }}>
            <Text style={AdoptDetailsStyle.infotxt}>
              Informations about this pet
            </Text>
          </View>
          <Octicons name="archive" size={25} />
        </View>
        <View style={AdoptDetailsStyle.nameline}>
          <Text style={AdoptDetailsStyle.nametxt}>Name: </Text>
          <Text style={AdoptDetailsStyle.nametxt}>{selectedElement.name}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default AdoptDetails;
