import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../../screens/About";
import Lista from "../../screens/Lista";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Tarea from "../../screens/Tareas";

const BottomTabs = createBottomTabNavigator();

const opciones = {
  headerStyle: {
    backgroundColor: "#e54b4b",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "OpenSans",
  },
};

export default TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Lista de Tareas"
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="Lista de Tareas"
        component={Lista}
        options={{
          tabBarLabel: "Profile",
          headerStyle: {
            backgroundColor: "#e54b4b",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "OpenSans",
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Información"
        component={About}
        options={{
          tabBarLabel: "Información",
          headerStyle: {
            backgroundColor: "#e54b4b",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "OpenSans",
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help" color={"black"} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Tarea"
        component={Tarea}
        options={{
          headerStyle: {
            backgroundColor: "#e54b4b",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "OpenSans",
          },
          tabBarVisible: false,
          tabBarButton: (props) => null,
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
