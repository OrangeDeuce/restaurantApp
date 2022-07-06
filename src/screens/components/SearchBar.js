import React from "react";
import { View, Text, Stylesheet } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = Stylesheet.create({
  background: {
    backgroundColor: "#F0EEEE",
  },
});

export default SearchBar;
