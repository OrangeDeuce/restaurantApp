import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }}></Image>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.review_stars}>
        {result.rating} Stars, {result.review_count} Reviews{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginLeft: 10,
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    marginLeft: 10,
    // fontSize: 16,
  },
  container: {
    marginLeft: 10,
  },
  review_stars: {
    marginLeft: 10,
  },
});

export default ResultsDetail;
