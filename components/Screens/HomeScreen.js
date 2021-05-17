import React from "react";
import { View, StyleSheet } from "react-native";
import Search from "../Search";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Search />
        <Button
          mode="outlined"
          compact={true}
          onPress={() => {
            console.log("pressed");
            navigation.navigate("Saved Data");
          }}
          style={styles.btn}
        >
          Saved Data
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    justifyContent: "space-around",
  },
});
