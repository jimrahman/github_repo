import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";

export default function SavedDataScreen() {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    fetchingSavedData();
    return () => {};
  }, []);

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

  const ItemView = ({ item }) => {
    return (
      <View style={styles.list}>
        <Text style={styles.wrapText}>{item.fullName}</Text>
        <Text style={styles.wrapText}>{item.id}</Text>
        <Text style={styles.wrapText}>{item.language}</Text>
        <Text style={styles.wrapText}>{item.stargazersCount}</Text>
        <Text style={styles.wrapText}>{item.url}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView>
        <View>
          <FlatList
            data={savedData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={ItemView}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 8,
  },
  wrapText: {
    backgroundColor: "#e9e9e9",
    fontSize: 14,
  },
});
