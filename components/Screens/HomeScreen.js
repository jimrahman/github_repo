import React from "react";
import { View } from "react-native";
import Search from "../Search";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View>
        <Search />
        <Button
          mode="outlined"
          compact={true}
          onPress={() => {
            console.log("pressed");
            navigation.navigate("Saved Data");
          }}
        >
          Saved Data
        </Button>
      </View>
    </>
  );
}
