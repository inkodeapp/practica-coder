import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Boton(props) {
  const { title, onPress, disabled } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text  style={styles.text} >{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#444140",
    width: "30%",
    padding: 10,
    borderColor: "#8E9FBC",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    marginBottom: 10,
  },text:{
    fontFamily: "OpenSansBold",
    color: "white",
    alignContent: "center",
    textAlign: "center",

  }
});
