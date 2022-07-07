import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() =>
          console.log("term was submitted via onTermSubmitted!")
        }
      />
      <Text>Search Screen</Text>
      <Text>Here is what user is typing:</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
