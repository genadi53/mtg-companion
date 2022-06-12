import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { windowWidth } from "../constants/Layout";

type CardPreviewProps = {
  name: string;
  imageUrl: string;
};

const CardPreview: React.FC<CardPreviewProps> = ({ imageUrl, name }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <Text>{name}</Text>
    </View>
  );
};

export default CardPreview;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: windowWidth,
    height: 200,
    padding: 2.5,

    borderBottomWidth: 1,
    borderColor: "red",
    marginTop: 5,
  },

  image: {
    width: 100,
    height: 175,
  },
});
