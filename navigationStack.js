import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/Screens/HomeScreen";
import SavedDataScreen from "./components/Screens/SavedDataScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Saved Data" component={SavedDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
