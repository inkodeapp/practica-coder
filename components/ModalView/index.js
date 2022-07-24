import React from "react";
import {
  Text,
  View,
  Button,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Boton from "../Boton";

export default function ModalView(props) {
  const { modalVisible, itemSelected, onHandlerDeleteItem,onHandlerCompleteItem } = props;
  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <View style={styles.modalTitle}>
            <Text>{itemSelected.text}</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>Elija una accion?</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>

          <TouchableOpacity
      style={styles.button}
      onPress={() => onHandlerDeleteItem(itemSelected.id)}
    >
      <Text  style={styles.text} >Eliminar</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => onHandlerCompleteItem(itemSelected.id)}

    >
      <Text  style={styles.text} >Completar</Text>
    </TouchableOpacity>
          
          
          </View>
        </View>
        <TextInput autoFocus={true} placeholder="Autofocus to keep the keyboard" style={{display: 'none'}} />

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
  },
  modalButton: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },button:{
    backgroundColor: "#444140",
    padding: 10,
    margin:10,
    borderRadius: 10,
    marginTop: 10,
  },
  text:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  }
});
