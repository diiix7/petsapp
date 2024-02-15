import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import HomeStyle from "./Home.style.js";
import { useNavigation } from "@react-navigation/native";
import HeaderBox from "../../components/HeaderBox/HeaderBox.js";
import image from "../../assets/images/image.jpeg";
import { FontAwesome, Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = (props) => {
  const navigation = useNavigation();

  const handleAdopt = (element) => {
    navigation.navigate("AdoptDetails", { id: element });
  };

  // ip adress
  const dataUrl = "http://192.168.0.158:3001/data";

  // local data saved from server data
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        const jsonData = await response.json();
        if (jsonData != null) {
          const dataJson = JSON.stringify(jsonData);
          try {
            await AsyncStorage.setItem("dataStored", dataJson);
            setLocalData(jsonData);
            console.log("Data saved successfully in local storage !");
          } catch (error) {
            console.error("Error saving data to local storage: ", error);
          }
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const renderElement = ({ item }) => {
    return (
      <View key={item.id}>
        <View style={HomeStyle.item}>
          <Image source={{ uri: item.image }} style={HomeStyle.image} />
        </View>
        <View style={HomeStyle.elemtop}>
          <View style={{ justifyContent: "center" }}>
            <Text style={HomeStyle.elemtxt}>{item.name}</Text>
          </View>
          <AntDesign
            name="checkcircle"
            color={"rgba(211, 211, 211, 0.4)"}
            size={25}
            style={HomeStyle.check}
          />
        </View>
        <Pressable onPress={() => handleAdopt(item.id)} style={HomeStyle.click}>
          <View style={{ justifyContent: "center" }}>
            <Text style={HomeStyle.clicktxt}>Adopt Now</Text>
          </View>
          <AntDesign name="shoppingcart" size={20} />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={HomeStyle.view}>
      <HeaderBox screenName="home" />
      <View style={HomeStyle.main}>
        <FlatList
          data={localData}
          renderItem={renderElement}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;
