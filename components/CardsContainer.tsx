import { StyleSheet, FlatList } from "react-native";
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
          imageUrl={item.image_uris ? item.image_uris["normal"] : null}
          isDoubleFaced={
            item.card_faces && item.card_faces[0].image_uris ? true : false
          }
          imageUrls={
            item.card_faces && item.card_faces.length > 0
              ? [
                  item.card_faces[0].image_uris
                    ? item.card_faces[0].image_uris["normal"]
                    : "https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg",
                  item.card_faces[1].image_uris
                    ? item.card_faces[1].image_uris["normal"]
                    : "https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg",
                ]
              : null
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
