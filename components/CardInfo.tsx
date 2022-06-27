import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import LegalFormats from "./LegalFormats";
import { Card } from "../utils/customTypes";

type CardInfoProps = {
  card: Card;
};

const displayColorCost = (manaCost: string, cmc: number) => {
  const symbolsArr = manaCost.replaceAll("{", "").replaceAll("}", "").split("");
  return null;
};

const CardInfo: React.FC<CardInfoProps> = ({ card }) => {
  const isDoubleFaced = card.card_faces && card.card_faces ? true : false;

  let display = null;
  if (!isDoubleFaced) {
    display = (
      <>
        <View style={styles.titleConatiner}>
          <Text style={styles.title}>{card.name}</Text>
        </View>
        <View style={styles.cardTypeContainer}>
          <Text style={styles.text}>{card.type_line}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>{card.oracle_text}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.artis}>Illustrated by {card.artist}</Text>
        </View>
      </>
    );
  } else {
    display = (
      <>
        <View style={styles.titleConatiner}>
          <Text style={styles.title}>{card.card_faces![0].name}</Text>
        </View>
        <View style={styles.cardTypeContainer}>
          <Text style={styles.text}>{card.card_faces![0].type_line}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>{card.card_faces![0].oracle_text}</Text>
        </View>
        <View style={styles.titleConatiner}>
          <Text style={styles.title}>{card.card_faces![1].name}</Text>
        </View>
        <View style={styles.cardTypeContainer}>
          <Text style={styles.text}>{card.card_faces![1].type_line}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>{card.card_faces![1].oracle_text}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.artis}>
            Illustrated by {card.card_faces![0].artist}
          </Text>
        </View>
      </>
    );
  }

  return (
    <View style={styles.container}>
      {display}
      <View style={styles.legalitiesContainer}>
        <LegalFormats legalities={card.legalities as any} />
      </View>
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  container: {
    borderColor: "rgba(0,0,0,0.25)",
    borderWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderBottomColor: "black",
    borderRadius: 4,
    marginTop: 15,
    marginHorizontal: "auto",
    marginBottom: 0,
    fontSize: 16,
    color: "#16161D",
  },
  titleConatiner: {
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    lineHeight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  title: { fontSize: 16, fontWeight: "600", marginRight: 10 },
  cardTypeContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 15,
  },
  textBox: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingLeft: 12,
    paddingRight: 6,
    paddingVertical: 12,
    fontSize: 15,
    lineHeight: 18,
  },
  text: {
    fontSize: 15,
  },
  artis: { fontSize: 14 },
  legalitiesContainer: {
    padding: 15,
  },
});
