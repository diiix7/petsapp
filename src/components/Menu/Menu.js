import { View, Text, Pressable } from "react-native";
import MenuStyle from "./Menu.style.js";
import { FontAwesome, Ionicons, AntDesign, Octicons } from "@expo/vector-icons";

const Menu = (props) => {
  return (
    <Pressable onPress={() => console.log("Ici le drawer du menu !")}>
      <Ionicons name="menu" size={40} />
    </Pressable>
  );
};
export default Menu;
