import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import Boton from "../../components/Boton";
import Item from "../../components/Item";
import ModalView from "../../components/ModalView";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/lista/action";

const Lista = ({ navigation }) => {
  const categories = useSelector((store) => store.listaReducer.lista);
  const dispatch = useDispatch();

  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [itemID, setItemID] = useState(0);

  const onHandlerChangeItem = (text) => {
    setTextItem(text);
  };

  const onHandlerAddItem = () => {
    dispatch(addItem({ text: textItem, id: Date.now(), status: false }));
    /* setList([...list, { text: textItem, id: Date.now(), status: false }]);*/
    setTextItem("");
  };

  const onShowModal = (id) => {
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemID(id);
    /*
    setItemSelected(categories.find((item) => item.id === id));*/
    setModalVisible(!modalVisible);
  };

  let content = (
    <View style={styles.container}>
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
            onPress={() => {
              onHandlerAddItem();
            }}
            disabled={textItem.length == 0 ? true : false}
          />
        </View>
        <FlatList
          style={styles.list}
          data={categories/*list*/}
          renderItem={({ item }) => (
            <Item
              text={item.text}
              status={item.status}
              accion={() => onHandlerModal(item.id)}
              onLongPress={() =>
                navigation.navigate("Tarea", { itemID: item.id })
              }
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <ModalView
          modalVisible={modalVisible}
          itemSelected={itemSelected}
          itemID={itemID}
          onShowModal={onShowModal}
        />
      </View>
    </View>
  );
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
  body: {
    backgroundColor: "#f7ebe8",
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
