import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Card } from "../utils/customTypes";
import useColorScheme from "../hooks/useColorScheme";

type CardSetsProps = {
  card: Card;
};

export const CardSets: React.FC<CardSetsProps> = ({ card }) => {
  const theme = useColorScheme();
  const [setUrl, setSetUrl] = useState<string | null>(null);

  useEffect(() => {}, [card]);

  return (
    <View style={styles.container}>
      <View style={styles.currentSetContainer}>
        <Image
          source={{
            uri: "https://c2.scryfall.com/file/scryfall-symbols/sets/default.svg?1655697600",
          }}
          style={styles.icon}
        />

        <View style={{}}>
          <Text style={styles.title}>
            {card.set_name} {card.set.toUpperCase()}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text style={[styles.text]}>
              #{card.collector_number} · {card.rarity}
            </Text>
          </View>
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#343242",
    paddingVertical: 9,
    paddingLeft: 20,
    paddingRight: 9,
  },
  text: {
    color: "#FDFDFD",
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    color: "#FDFDFD",
  },
  allPrintsContainer: {},
  icon: {
    backgroundColor: "#fdfdfd",
    height: 34,
    width: 34,
    borderRadius: 15,
    marginRight: 20,
  },
});
