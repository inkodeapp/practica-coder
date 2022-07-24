import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import Boton from "../../components/Boton";
import Item from "../../components/Item";
import ModalView from "../../components/ModalView";
import { useState } from "react";
import Tarea from "../Tarea";


const Lista = () => {

  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState(1);

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

  const onHandlerModify = (id, newtext) => {
    setList((item) =>
      item.map((item) => {
        if (item.id === id) {
          item.status = !item.status;
          item.text = newtext;
        }
        return item;
      })
    );
    setItemSelected({});
  };

  const onHandlerModal = (id) => {
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  let content = (
    <View style={styles.container}>
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
              onLongPress={() => switchscreen(item.id)}
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

  const switchscreen = (id) => {
    setEditItem(id);
    setEdit(true);
  };

  if (edit) {
    content = (
      <Tarea
        editItem={editItem}
        onHandlerModify={onHandlerModify}
        list={list}
        edit={setEdit}
      />
    );
  }



  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "OpenSans",
    backgroundColor: "#e54b4b",
    width: "100%",
    height: "100%",
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
    fontFamily: "OpenSans",
    fontSize: 24,
    color: "white",
  },
  body: {
    backgroundColor: "#f7ebe8",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  input: {
    height: 40,
    color: "black",
    backgroundColor: "#f5f5f5",
    width: "70%",
    borderColor: "#8E9FBC",
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,

  },
  list: {
    width: "100%",
    height: "100%",
    paddingLeft: 40,
    paddingRight: 40,
  },

  containerinput: {
    marginTop: 10,
    flexDirection: "row",
    padding: 40,
  },
});

export default Lista;
