import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SwitchButton from "./SwitchButton";
import { Card } from "../utils/customTypes";

type CardPreviewProps = {
  card: Card;
  width: number;
  height: number;
};

const CardPreview: React.FC<CardPreviewProps> = ({ card, width, height }) => {
  let display = null;
  const isDoubleFaced =
    card.card_faces && card.card_faces[0].image_uris ? true : false;
  const imageUrl = card.image_uris ? card.image_uris["normal"] : null;
  const imageUrls =
    card.card_faces && card.card_faces.length > 0
      ? [
          card.card_faces[0].image_uris
            ? card.card_faces[0].image_uris["normal"]
            : "https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg",
          card.card_faces[1].image_uris
            ? card.card_faces[1].image_uris["normal"]
            : "https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg",
        ]
      : null;
  const [activeIdx, setActive] = useState<number>(0);
  if (isDoubleFaced) {
    display = (
      <>
        <View style={styles.switchBtn}>
          <SwitchButton
            size={35}
            onClick={() => {
              setActive(activeIdx === 0 ? 1 : 0);
            }}
          />
        </View>
        <Image
          source={{
            uri: imageUrls![activeIdx],
          }}
          style={[styles.image, { width, height }]}
        />
      </>
    );
  } else {
    display = imageUrl ? (
      <Image
        source={{
          uri: imageUrl,
        }}
        style={[styles.image, { width, height }]}
      />
    ) : (
      <Text>{card.name}</Text>
    );
  }

  return display;
};

export default CardPreview;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  image: {
    resizeMode: "contain",
  },
  switchBtn: {
    position: "absolute",
    top: "35%",
    left: "72.5%",
    zIndex: 10,
  },
});
