import { StyleSheet, Image, Text, View } from "react-native";
import React, { useState } from "react";
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
          style={styles.image}
        />
      </>
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
  image: {
    resizeMode: "contain",
    width: 200,
    height: 250,
  },
  switchBtn: {
    position: "absolute",
    top: "35%",
    left: "72.5%",
    zIndex: 10,
  },
});
