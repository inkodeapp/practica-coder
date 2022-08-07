import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import TabNavigator from "./navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Italic.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });


  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
    <TabNavigator  />   
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "OpenSans",
    backgroundColor: "#e54b4b",
  },
});
