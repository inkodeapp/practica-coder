import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Item(props) {
  const { text, status, accion } = props;
  return (
    <TouchableOpacity
      onPress={accion}
      style={status ? styles.itemcompletado : styles.item}
    >
      <Text style={status ? styles.textComplete : styles.textPending}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "gray",
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderColor: "#8E9FBC",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
  },
  itemcompletado: {
    backgroundColor: "#7AC74F",
    color: "white",
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderColor: "#FFA987",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    textDecorationLine: "line-through",
  },
  textPending: {
    color: "white",
  },textComplete:{
    color: "white",
  }
});
