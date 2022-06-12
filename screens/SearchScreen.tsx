import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardPreview from "../components/CardPreview";
import { View } from "../components/Themed";
import { windowWidth } from "../constants/Layout";
import { RootTabScreenProps } from "../types";
import { Card } from "../utils/customTypes";
import { getAllSets, fetchSampleCards } from "../utils/fetchData";

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<"Search">) {
  const [text, onChangeText] = useState<string>("");
  const [cards, setCards] = useState<Card | null>(null);

  useEffect(() => {
    if (!text) return;
    const getCards = async () => {
      const c = await fetchSampleCards(text);
      console.log(c);
      setCards(c);
    };
    getCards();
  }, [text]);

  // useEffect(() => {
  //   const f = async () => {
  //     await getAllSets();
  //   };
  //   f();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="e.g. Black Lotus"
        value={text}
      />

      {cards && (
        <CardPreview
          imageUrl={cards.image_uris ? cards.image_uris["normal"] : ""}
          name={cards.name}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container2: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: windowWidth,
    height: 200,
    padding: 2.5,

    borderWidth: 1,
    borderColor: "red",
    marginTop: 5,
  },
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
