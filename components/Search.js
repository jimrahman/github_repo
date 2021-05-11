import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  const onChangeSearch = (query) => setSearchQuery(query);

  const gitURL =
    "https://api.github.com/search/repositories?q=" +
    { searchQuery } +
    "java&page=1&per_page=2";

    console.log(gitURL);

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
        //console.log(json);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(searchQuery);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Text>{searchQuery}</Text>
    </View>
  );
};

export default Search;
