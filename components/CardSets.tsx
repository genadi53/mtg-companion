import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Set } from "../utils/customTypes";
import useColorScheme from "../hooks/useColorScheme";
import { fetchSetByName } from "../utils/fetchData";

type CardSetsProps = {
  card: Card;
};

export const CardSets: React.FC<CardSetsProps> = ({ card }) => {
  const theme = useColorScheme();
  const [setUri, setSetUri] = useState<string | null>(null);

  useEffect(() => {
    const getSetUri = async () => {
      const set: Set | null = await fetchSetByName(card.set);
      if (set) {
        setSetUri(set.icon_svg_uri);
      }
    };
    getSetUri();
  }, [card]);

  return (
    <View style={styles.container}>
      <View style={styles.currentSetContainer}>
        | null
        <Image
          source={{
            uri: setUri
              ? setUri
              : "https://c2.scryfall.com/file/scryfall-symbols/sets/default.svg?1655697600",
          }}
          style={[styles.icon, { resizeMode: "stretch" }]}
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
