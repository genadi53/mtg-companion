import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export const CardSets = () => {
  return (
    <View style={styles.container}>
      <View style={styles.currentSetContainer}>
        <Text>{set.name}</Text>
        <Text>{collector_number}</Text>
        <Text>{rarity}</Text>
      </View>
      <View style={styles.allPrintsContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    marginBottom: 5,
    fontSize: 12,
  },
  currentSetContainer: {
    color: "#FDFDFD",
    backgroundColor: "#343242",
    paddingVertical: 9,
    paddingLeft: 40,
  },
  allPrintsContainer: {},
});
