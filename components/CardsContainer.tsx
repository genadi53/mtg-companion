import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import React from "react";
import CardPreview from "./CardPreview";
import { Card } from "../utils/customTypes";
import { windowWidth } from "../constants/Layout";

type CardsContainerProps = {
  cards: Card[];
};

const CardsContainer: React.FC<CardsContainerProps> = ({ cards }) => {
  return (
    <FlatList
      contentContainerStyle={{
        width: windowWidth,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingBottom: 100,
      }}
      data={cards}
      keyExtractor={(card, _idx) => card.id}
      numColumns={2}
      renderItem={({ item }) => (
        <CardPreview
          imageUrl={
            item.image_uris
              ? item.image_uris["normal"]
              : item.card_faces
              ? item.card_faces[0].image_uris["normal"]
              : item.card_faces[1].image_uris["normal"]
          }
          name={item.name}
        />
      )}
    />
  );
};

export default CardsContainer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
