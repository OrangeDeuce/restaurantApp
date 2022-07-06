import React from "react";
import { View, Text, Stylesheet } from "react-native";
import SearchBar from "./components/SearchBar";

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
};

//const styles = Stylesheet.create({});

export default SearchScreen;
