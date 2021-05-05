import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Searchbar, Button } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
          <Button mode="contained" onPress={() => console.log("worked")}>Search</Button>
          <Text style={styles.paragraph}>
            Search Your favorite github Repositories
          </Text>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
