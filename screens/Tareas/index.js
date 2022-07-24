import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";

const Tareas = ({ route, navigation }) => {
  const { editItem } = route.params;
  const [list, setList] = useState(route.params.list);
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
  }, []);

  const onHandlerModify = (id, newtext) => {
    setList((item) =>
      item.map((item) => {
        if (item.id === id) {
          item.text = newtext;
        }
        return item;
      })
    );
    setItemSelected({});
  };

  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onHandlerModify(itemSelected, textItem);
          navigation.navigate({
            name: "Lista de Tareas",
            params: { list: list },
            merge: true,
          });
        }}
      >
        <Text style={styles.text}>Modificar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Lista de Tareas");
        }}
      >
        <Text style={styles.text}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 100,
    margin: "10%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    color: "black",
    fontSize: 20,
    fontFamily: "OpenSans",
    textAlignVertical: "top",
  },
  button: {
    width: "60%",
    padding: 10,
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: "10%",
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

export default Tareas;
