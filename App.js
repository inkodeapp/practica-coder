import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { useState } from "react";
import Boton from "./components/Boton";
import Item from "./components/Item";
import ModalView from "./components/ModalView";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandlerChangeItem = (text) => {
    setTextItem(text);
  };
  const onHandlerAddItem = () => {
    setList([...list, { text: textItem, id: Date.now(), status: false }]);
    setTextItem("");
  };

  const onHandlerDelete = (id) => {
    setList((item) => item.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerComplete = (id) => {
    setList((item) =>
      item.map((item) => {
        if (item.id === id) {
          item.status = !item.status;
        }
        return item;
      })
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Tareas</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.containerinput}>
          <TextInput
            placeholder="Escribe aqui"
            style={styles.input}
            value={textItem}
            onChangeText={onHandlerChangeItem}
          />
          <Boton
            title="Agregar"
            onPress={onHandlerAddItem}
            disabled={textItem.length == 0 ? true : false}
          />
        </View>
        <FlatList
          style={styles.list}
          data={list}
          renderItem={({ item }) => (
            <Item
              text={
                item.text + " " + (item.status ? "Completado" : "Pendiente")
              }
              status={item.status}
              accion={() => onHandlerModal(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <ModalView
          modalVisible={modalVisible}
          itemSelected={itemSelected}
          onHandlerDeleteItem={onHandlerDelete}
          onHandlerCompleteItem={onHandlerComplete}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e54b4b",
    /*backgroundColor: "#007CC3" "#f5f5f5"*/
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e54b4b",
    width: "100%",
    height: 80,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "#f7ebe8",
    borderRadius: 30,
  }, input: {
    height: 40,
    color: "black",
    backgroundColor: "#f5f5f5",
    width: "80%",
    borderColor: "#8E9FBC",
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
  },
  list: {
    width: '100%',
    height: '100%',
    paddingLeft:40,
    paddingRight:40,
  },

  containerinput: {
    marginTop: 10,
    flexDirection: "row",
    padding: 40,
  },
});
