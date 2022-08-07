import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Modo de uso:
        {"\n"}
        1. Ingresa un texto en el campo de texto.
        {"\n"}
        2. Presiona el boton de agregar.
        {"\n"}
        3. El texto ingresado aparecera en la lista.
        {"\n"}
        4. Si quieres eliminar un item de la lista, presiona el boton de eliminar.
        {"\n"}
        5. Si quieres completar un item de la lista, presiona el boton de completar.
        {"\n"}
        6. Si quieres editar un item de la lista, presiona el boton de editar.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7ebe8",
    padding: 40,
  },
  text: {
    fontSize: 20,
    fontFamily: "OpenSans",
  },
});

export default About;
