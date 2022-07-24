import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Lista from "../screens/Lista";
import Tarea from "../screens/Tareas";

const Stack = createNativeStackNavigator();

const opciones = {
  headerStyle: {
    backgroundColor: "#e54b4b",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "OpenSans",
  },
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Tareas" component={Lista} options={opciones} />
        <Stack.Screen name="Tarea" component={Tarea} options={opciones} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
