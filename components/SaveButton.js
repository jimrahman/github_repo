import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function SaveButton() {
  return (
    <>
      <View>
        <Button
          mode="outlined"
          compact={true}
          onPress={() => {
            console.log("pressed");
          }}
        >
          Saved Data
        </Button>
      </View>
    </>
  );
}
