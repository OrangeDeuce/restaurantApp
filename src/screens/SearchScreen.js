import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi()} //Or just onTermSubmit={searchApi}
      />
      <Text>Search Screen</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Here is what user is typing:</Text>
      <Text>{term}</Text>
      <Text>Yelp Search:</Text>
      <Text> We have found {results.length} results! </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
