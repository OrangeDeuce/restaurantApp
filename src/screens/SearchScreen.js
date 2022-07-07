import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("./search", {
        params: {
          limit: 30,
          term: searchTerm,
          location: "lincolnwood",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      console.log(e);
      setErrorMessage("Man, something went wrong!");
    }
  };

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
