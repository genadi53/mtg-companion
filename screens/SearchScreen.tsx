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
import CardsContainer from "../components/CardsContainer";
import { View } from "../components/Themed";
import { windowWidth } from "../constants/Layout";
import { RootTabScreenProps } from "../types";
import { Card } from "../utils/customTypes";
import {
  getAllSets,
  fetchSampleCards,
  fetchMultipleCards,
} from "../utils/fetchData";

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<"Search">) {
  const [text, onChangeText] = useState<string>("");
  const [cards, setCards] = useState<Card[] | null>(null);

  useEffect(() => {
    if (!text) return;
    const getCards = async () => {
      const c = await fetchMultipleCards(text);
      // console.log(c);
      setCards(c ? c : null);
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
      {cards && <CardsContainer cards={cards} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: windowWidth * 0.8,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
