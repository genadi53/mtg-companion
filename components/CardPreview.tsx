import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { windowWidth } from "../constants/Layout";

type CardPreviewProps = {
  name: string;
  imageUrl: string | null;
};

const CardPreview: React.FC<CardPreviewProps> = ({ name, imageUrl }) => {
  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
      ) : (
        <Text>{name}</Text>
      )}
    </View>
  );
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
    width: 200,
    height: 250,
  },
});
