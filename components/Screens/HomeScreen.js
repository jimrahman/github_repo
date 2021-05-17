import React from "react";
import { View } from "react-native";
import Search from "../Search";
import SaveButton from "../SaveButton";

export default function HomeScreen() {
  return (
    <>
      <View>
        <Search />
        <SaveButton />
      </View>
    </>
  );
}
