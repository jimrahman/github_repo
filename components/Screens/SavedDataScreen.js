import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function SavedDataScreen() {
  const [savedData, setSavedData] = useState([]);

  const fetchingSavedData = () => {
    const dockerUrl = "http://192.168.0.107:8080/repo/";
    fetch(dockerUrl)
      .then((response) => response.json())
      .then((json) => json.repos)
      .then((jsonData) => {
        setSavedData(jsonData);
      })
      .catch((e) => {
        console.error(e);
      });
  };

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

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
