import React from "react";
import { Text, TouchableOpacity, StyleSheet,Image } from "react-native";

export default function Item(props) {
  const { text, status, accion,onLongPress} = props;
  
  return (
    <TouchableOpacity
      onPress={accion}
      onLongPress={onLongPress}
      style={status ? styles.itemcompletado : styles.item}
    >
      <Text style={status ? styles.textComplete : styles.textPending}>{text}</Text>
      {status ? (
      <Image
          style={{ width: 30, height: 30 }}
          source={ require('../../assets/check.png' ) }
        />) : (
          <Image
          
          style={{ width: 30, height: 30 }}
          source={ require('../../assets/uncheck.png' ) }
        />
        )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "gray",
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderColor: "#8E9FBC",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    alignContent:"space-between",
    justifyContent:"space-between",
    alignItems:"center",
  },
  itemcompletado: {
    flexDirection: "row",
    alignContent:"space-between",
    justifyContent:"space-between",
    alignItems:"center",
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
