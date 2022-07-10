import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log(id); //Just to test if id shows up successfully
  return (
    <View>
      <Text>The Results Show Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ResultsShowScreen;
