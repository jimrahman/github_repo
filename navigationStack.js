import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "./components/Search";
import HomeScreen from "./components/Screens/HomeScreen";
import SavedDataScreen from "./components/Screens/SavedDataScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Git Repo Search">
        <Stack.Screen name="Search" component={HomeScreen} />
        <Stack.Screen name="Saved Data" component={SavedDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
