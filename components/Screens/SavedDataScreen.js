import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";

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

  const removeRepo = (selecteddata) => {
    console.log(selecteddata);
    const apiURL = `http://192.168.0.107:8080/repo/${selecteddata}`;
    console.log(apiURL);
    let postData = {
      method: "DELETE",
      body: "",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    fetch(apiURL, postData)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          alert("The repo has been deleted");
          fetchingSavedData();
        } else {
          alert("couldn't delete the repo");
        }
      })
      .catch((e) => console.error(e));
  };

  const ItemView = ({ item }) => {
    return (
      <View style={styles.list}>
        <Text style={styles.wrapText}>Name: {item.fullName}</Text>
        <Text style={styles.wrapText}>Id: {item.id}</Text>
        <Text style={styles.wrapText}>Language: {item.language}</Text>
        <Text style={styles.wrapText}>
          StargazersCount: {item.stargazersCount}
        </Text>
        <Text style={styles.wrapText}>URL: {item.url}</Text>
        <Button
          mode="contained"
          compact={true}
          onPress={() => {
            removeRepo(item.id.toString());
          }}
        >
          DELETE
        </Button>
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
