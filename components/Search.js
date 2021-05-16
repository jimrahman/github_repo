import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Searchbar, Button, TextInput } from "react-native-paper";

const Search = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

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
  console.log(searchQuery);
  console.log(data);

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
          renderItem={({ item }) => <Text>{item.full_name}</Text>}
        />
      </View>
    </>
  );
};

export default Search;
