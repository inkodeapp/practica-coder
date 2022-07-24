import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./navigation/Navigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Italic.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });


  if (!fontsLoaded) {
    return null;
  }


  return (
    <Navigator />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "OpenSans",
    backgroundColor: "#e54b4b",
  },
});
