import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import HeaderBoxStyle from "./HeaderBox.style.js";
import { FontAwesome, Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderBox = (props) => {
  const [searchvalue, setSearchvalue] = useState("");

  const handleSearch = (text) => {
    setSearchvalue(text);
    console.log("Search value: ", text);
  };

  const screen = props.screenName;

  const selectedItem = props.selectedItem;

  const [selectedElement, setSelectedElement] = useState([]);

  useEffect(() => {
    if (selectedItem != null) {
      const fetchData = async () => {
        try {
          const dataRetrieved = await AsyncStorage.getItem("dataStored");
          if (dataRetrieved !== null) {
            const dataConvert = JSON.parse(dataRetrieved);
            const selected = dataConvert.find(
              (element) => element.id === selectedItem
            );
            setSelectedElement(selected);
          }
        } catch (error) {
          console.error("Error featching data from local storage: ", error);
        }
      };

      fetchData();
    }
  }, []);

  return (
    <View style={HeaderBoxStyle.view}>
      <View style={HeaderBoxStyle.headerbox}>
        <View style={HeaderBoxStyle.headerboxline1}>
          <Ionicons name="menu" size={40} />
          <View style={{ justifyContent: "center" }}>
            <Text style={HeaderBoxStyle.headerboxtxt}>AE</Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Octicons name="bell" size={25} />
          </View>
        </View>
        {screen == "home" && (
          <View style={HeaderBoxStyle.headerboxline2}>
            <AntDesign
              name="search1"
              size={25}
              style={HeaderBoxStyle.searchlogo}
            />
            <TextInput
              placeholder="Search"
              value={searchvalue}
              onChangeText={handleSearch}
              style={HeaderBoxStyle.searchzone}
            />
          </View>
        )}
        {screen == "adopt" && (
          <View style={HeaderBoxStyle.headerboxline22}>
            <Text style={HeaderBoxStyle.headerboxline22txt}>
              Adopt this pet
            </Text>
            <Text style={HeaderBoxStyle.headerboxline22txt2}>
              {selectedElement.name}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default HeaderBox;
