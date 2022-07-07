import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        //onChangeText={(newTerm) => onTermChange(newTerm)}
        onChangeText={onTermChange}
        //onEndEditing={() => onTermSubmit()}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EE00",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  inputStyle: {
    //borderColor: "black",
    //borderWidth: 1,
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
