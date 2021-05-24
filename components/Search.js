import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Searchbar, Button } from "react-native-paper";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [postedData, setPostedData] = useState([]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    setTimeout(fetching, 3000);
  };
  const encodedQuery = encodeURI(searchQuery);

  const gitURL = `https://api.github.com/search/repositories?q=${encodedQuery}&page=1&per_page=10&sort=stargazers_count`;

  const fetching = () => {
    fetch(gitURL)
      .then((response) => response.json())
      .then((json) => json.items)
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const fetchPostedData = () => {
    const dockerUrl = "http://192.168.0.107:8080/repo/";
    fetch(dockerUrl)
      .then((response) => response.json())
      .then((json) => json.repos)
      .then((jsonData) => {
        setPostedData(jsonData);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const postSelectedData = (SelectData) => {
    fetchPostedData();
    let postData = {
      method: "POST",
      body: JSON.stringify(SelectData),
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const dockerUrl = "http://192.168.0.107:8080/repo/";

    if (postedData.length <= 10) {
      fetch(dockerUrl, postData)
        .then((response) => {
          if (response.status === 200) {
            alert("Data have been saved");
          } else {
            alert("Data was not saved");
          }
        })
        .catch((e) => console.error(e));
    } else {
      alert("only 10 items canbe saved");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.list}>
        <TouchableOpacity
          onPress={() => {
            postSelectedData({
              id: item.id.toString(),
              fullName: item.full_name,
              createdAt: item.created_at,
              stargazersCount: item.stargazers_count,
              language: item.language,
              url: item.url,
            });
          }}
        >
          <Text style={styles.wrapText}>ID: {item.id}</Text>
          <Text style={styles.wrapText}>Name: {item.full_name}</Text>
          <Text style={styles.wrapText}>Time Created: {item.created_at}</Text>
          <Text style={styles.wrapText}>
            StarGazer Count: {item.stargazers_count}
          </Text>
          <Text style={styles.wrapText}>Language: {item.language}</Text>
          <Text style={styles.wrapText}>URL: {item.url}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Search a github repo</Text>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={() => {
            fetching();
          }}
          testID={"search-bar"}
        />
        <Button
          mode="outlined"
          compact={true}
          onPress={() => {
            fetching();
          }}
          testID={"search-button"}
        >
          Search
        </Button>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

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
    justifyContent: "space-around",
  },
  opacityStyle: {
    margin: 2,
  },
});

export default Search;
