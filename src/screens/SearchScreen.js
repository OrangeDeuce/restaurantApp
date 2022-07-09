import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "./components/ResultList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  //console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi()} //Or just onTermSubmit={searchApi}
      />
      {/*<Text>Search Screen</Text>*/}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/*
      <Text>Here is what user is typing:</Text>
      <Text>{term}</Text>
      <Text>Yelp Search:</Text>
      */}
      {/*
      <Text style={styles.results_count}>
        {" "}
        We have found {results.length} results!{" "}
      </Text>
    */}
      <ScrollView>
        <ResultsList results={filterResultsByPrice("$")} title="Cheap Eats" />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Average Eats"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Expensive Eats"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  results_count: {
    marginLeft: 10,
  },
});

export default SearchScreen;
