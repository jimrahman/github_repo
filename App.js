import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import FlatListDemo from "./components/FlatList";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <FlatListDemo />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
