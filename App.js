import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Search from "./components/Search";
import SaveButton from "./components/SaveButton";
import NavigationStack from "./navigationStack";

export default function App() {
  return (
    <>
      <NavigationStack />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ecf0f1",
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  button: {
    justifyContent: "flex-end",
    marginBottom: 16,
  },
});
