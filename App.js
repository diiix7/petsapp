import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Landing from "./src/screens/Landing/Landing";
import Home from "./src/screens/Home/Home";
import Wishlist from "./src/screens/Wishlist/Wishlist";
import Calendar from "./src/screens/Calendar/Calendar";
import Store from "./src/screens/Store/Store";
import Settings from "./src/screens/Settings/Settings";

const TabBottom = createBottomTabNavigator();
const Stack = createStackNavigator();

const android = Platform.OS == "android" ? true : false;

function BottomTabs() {
  return (
    <TabBottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "white",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderWidth: 1,
          borderTopWidth: 0.5,
          borderColor: "lightgray",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          top: android ? -5 : 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Wishlist") {
            return (
              <View style={focused && styles.homeStyle}>
                <AntDesign
                  name={"hearto"}
                  size={30}
                  color={focused ? "white" : "gray"}
                  style={focused ? null : styles.top2}
                />
              </View>
            );
          } else if (route.name === "Calendar") {
            return (
              <View style={focused && styles.homeStyle}>
                <AntDesign
                  name={"calendar"}
                  size={30}
                  color={focused ? "white" : "gray"}
                  style={focused ? null : styles.top2}
                />
              </View>
            );
          } else if (route.name === "Home") {
            return (
              <View style={focused && styles.homeStyle}>
                <Octicons
                  name={"home"}
                  size={30}
                  color={focused ? "white" : "gray"}
                  style={focused ? null : styles.top2}
                />
              </View>
            );
          } else if (route.name === "Store") {
            return (
              <View style={focused && styles.homeStyle}>
                <AntDesign
                  name={"shoppingcart"}
                  size={30}
                  color={focused ? "white" : "gray"}
                  style={focused ? null : styles.top2}
                />
              </View>
            );
          } else if (route.name === "Settings") {
            return (
              <View style={focused && styles.homeStyle}>
                <Ionicons
                  name={"settings-outline"}
                  size={30}
                  color={focused ? "white" : "gray"}
                  style={focused ? null : styles.top2}
                />
              </View>
            );
          }
          return null;
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <TabBottom.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ tabBarLabel: "Wishlist" }}
      />
      <TabBottom.Screen
        name="Calendar"
        component={Calendar}
        options={{ tabBarLabel: "Calendar" }}
      />
      <TabBottom.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Home" }}
      />
      <TabBottom.Screen
        name="Store"
        component={Store}
        options={{ tabBarLabel: "Store" }}
      />
      <TabBottom.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarLabel: "Settings" }}
      />
    </TabBottom.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
      <StatusBar style={"auto"} translucent={true} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    width: 65,
    height: 65,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "chocolate",
  },
  top2: { marginTop: 15, marginBottom: -10 },
});

export default App;
