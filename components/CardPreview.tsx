import { StyleSheet, Image, Text, View } from "react-native";
import React, { useState } from "react";
import { windowWidth } from "../constants/Layout";
import SwitchButton from "./SwitchButton";

type CardPreviewProps = {
  name: string;
  imageUrl: string | null;
  imageUrls: string[] | null;
  isDoubleFaced: boolean;
};

const CardPreview: React.FC<CardPreviewProps> = ({
  name,
  imageUrl,
  isDoubleFaced,
  imageUrls,
}) => {
  let display = null;
  const [activeIdx, setActive] = useState<number>(0);

  if (isDoubleFaced) {
    display = (
      <View style={styles.switchContainer}>
        <View
          style={{
            position: "relative",
            top: "35%",
            left: "72.5%",
            zIndex: 10,
          }}
        >
          <SwitchButton
            size={35}
            onClick={() => {
              setActive(activeIdx === 0 ? 1 : 0);
            }}
          />
        </View>
        <Image
          source={{
            uri: imageUrls[activeIdx],
          }}
          style={styles.image}
        />
      </View>
    );
  } else {
    display = imageUrl ? (
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
    ) : (
      <Text>{name}</Text>
    );
  }

  return <View style={styles.container}>{display}</View>;
};

export default CardPreview;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  switchContainer: {
    padding: 0,
    margin: 0,
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 250,
  },
});
