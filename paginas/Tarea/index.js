import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";

const Tarea = (props) => {
  const { editItem, onHandlerModify, list, edit } = props;
  const [textItem, setTextItem] = useState("");
  const [itemSelected, setItemSelected] = useState();

  const onHandlerChangeItem = (text) => {
    setTextItem(text);
  };

  useEffect(() => {
    list.map((item) => {
      if (item.id === editItem) {
        setTextItem(item.text);
        setItemSelected(item.id);
      }
    });
  }, [editItem]);

  return (
    <View style={styles.container}>
      <TextInput
        multiline = {true}
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onHandlerModify(itemSelected, textItem);
          setTextItem("");
          setItemSelected(null);
          edit(false);
        }}
      >
        <Text style={styles.text}>Modificar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height:200,
    margin: "10%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
  },
  button: {
    width: "60%",
    padding: 10,
    margin: "20%",
    backgroundColor: "gray",
    borderColor: "#8E9FBC",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Tarea;
