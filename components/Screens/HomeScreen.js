import React from "react";
import { View, StyleSheet } from "react-native";
import Search from "../Search";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Search />
        <View>
          <Button
            mode="contained"
            compact={true}
            onPress={() => {
              navigation.navigate("Saved Data");
            }}
            style={styles.btn}
          >
            Saved Data
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    bottom: 30,
  },
});
