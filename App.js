import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Search from "./components/Search";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Search />
        </View>
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
});
