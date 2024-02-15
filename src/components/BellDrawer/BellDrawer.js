import { View, Text, Pressable } from "react-native";
import BellDrawerStyle from "./BellDrawer.style.js";
import { FontAwesome, Ionicons, AntDesign, Octicons } from "@expo/vector-icons";

const BellDrawer = (props) => {
  return (
    <Pressable onPress={() => console.log("Ici le drawer de notifications !")}>
      <Octicons name="bell" size={25} />
    </Pressable>
  );
};
export default BellDrawer;
