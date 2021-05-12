import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Searchbar, Button, TextInput } from "react-native-paper";

const Search = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  let list = [];

  const onChangeSearch = (query) => setSearchQuery(query);
  const removeSpaceFromQuery = searchQuery.replace(" ", "");

  const gitURL = `https://api.github.com/search/repositories?q=${removeSpaceFromQuery}&page=1&per_page=2`;

  console.log(gitURL);

  const fetching = () => {
    setLoading(true);
    fetch(gitURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
        console.log(json);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => setLoading(false));
  };
  console.log(searchQuery);

  return (
    error !== null && (
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <TextInput mode="outlined" disabled={true} value={searchQuery} />
        <Button mode="outlined" compact={true} onPress={() => fetching()}>
          Search
        </Button>
        <Text>{searchQuery}</Text>
      </View>
    )
  );
};

export default Search;
