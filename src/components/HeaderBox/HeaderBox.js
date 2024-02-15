import { View, Text, TextInput } from "react-native";
import HeaderBoxStyle from "./HeaderBox.style.js";
import { FontAwesome, Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import { useState } from "react";

const HeaderBox = (props) => {
  const [searchvalue, setSearchvalue] = useState("");

  const handleSearch = (text) => {
    setSearchvalue(text);
    console.log("Search value: ", text);
  };

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
      </View>
    </View>
  );
};
export default HeaderBox;
