import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Searchbar, Button } from "react-native-paper";

const Search = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({});
  const [postedData, setPostedData] = useState([]);

  const onChangeSearch = (query) => setSearchQuery(query);
  const removeSpaceFromQuery = searchQuery.replace(" ", "");

  const gitURL = `https://api.github.com/search/repositories?q=${removeSpaceFromQuery}&page=1&per_page=5`;

  const fetching = () => {
    setLoading(true);
    fetch(gitURL)
      .then((response) => response.json())
      .then((json) => json.items)
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => setLoading(false));
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

  const postSelectedData = () => {
    fetchPostedData();
    let postData = {
      method: "POST",
      body: JSON.stringify(selectedData),
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const dockerUrl = "http://192.168.0.107:8080/repo/";

    if (postedData.length <= 10) {
      fetch(dockerUrl, postData)
        .then((response) => {
          console.log(response.status);
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

  //console.log(data.length);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.list}>
        <TouchableOpacity
          onPress={() => {
            setSelectedData({
              id: item.id.toString(),
              fullName: item.full_name,
              createdAt: item.created_at,
              stargazersCount: item.stargazers_count,
              language: item.language,
              url: item.url,
            });
            postSelectedData();
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
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Button
          mode="outlined"
          compact={true}
          onPress={() => {
            console.log("pressed");
            fetching();
          }}
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
  },
  opacityStyle: {
    margin: 2,
  },
});

export default Search;
