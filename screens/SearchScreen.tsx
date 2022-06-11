import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Magic from "mtgsdk-ts";
// const mtg = require("mtgsdk");

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<"Search">) {
  const [text, onChangeText] = React.useState("");

  useEffect(() => {
    // mtg.card.all({ name: "Squee", pageSize: 1 }).on("data", (card: any) => {
    //   console.log(card.name);
    // });
    const fetchCards = async () => {
      await Magic.Cards.where({ name: text }).then((results) => {
        for (const card of results) console.log(card.name);
      });
      // mtg.card.find(3).then((result: any) => {
      //   console.log(result.card.name); // "Black Lotus"
      // });
    };

    fetchCards();
  }, [text]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="e.g. Black Lotus"
        value={text}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
