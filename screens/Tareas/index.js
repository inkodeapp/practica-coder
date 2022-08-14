import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItem } from "../../store/lista/action";

const Tareas = ({ route, navigation }) => {
  const { itemID } = route.params;
  const [textItem, setTextItem] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.listaReducer.lista);
  const itemSelected = categories.find((item) => item.id === itemID);

  const onHandlerChangeItem = (text) => {
    setTextItem(text);
  };

  useEffect(() => {
    setTextItem(itemSelected.text);
  }, [itemSelected]);

  const onHandlerUpdateItem = () => {
    dispatch(updateItem({ id: itemID, text: textItem }));
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
          onHandlerUpdateItem(itemID, textItem);
          navigation.navigate({
            name: "Lista de Tareas",
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
