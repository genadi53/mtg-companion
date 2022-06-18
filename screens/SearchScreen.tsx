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
import SearchBar from "../components/SearchBar";
import SwitchButton from "../components/SwitchButton";
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
      console.log("*****************");
      console.log(c);

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
      <SearchBar text={text} onChangeText={onChangeText} />
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
});
