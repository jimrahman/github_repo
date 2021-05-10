import React, { Component } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { ListItem, SearchBar, List } from "react-native-elements";

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      error: null,
      refresh: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = "https://api.github.com/users/jimrahman/repos";
    this.setState({ isLoading: true });

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState({
        isLoading: true,
        data: jsonData,
      });
      console.log(jsonData);
    } catch (e) {
      this.setState({ error: "Error Loading content", isLoading: false });
    }
  };

  render() {
      let {data, isLoading} = this.state
    return (
      <>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </>
    );
  }
}

export default FlatListDemo;
