import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import React from "react";
import CardPreview from "./CardPreview";
import { Card } from "../utils/customTypes";
import { windowWidth } from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";

type CardsContainerProps = {
  cards: Card[];
};

const CardsContainer: React.FC<CardsContainerProps> = ({ cards }) => {
  const navigation = useNavigation();

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
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CardInfo", { id: item.id, name: item.name });
            }}
          >
            <CardPreview card={item} width={200} height={250} />
          </TouchableOpacity>
        </View>
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
    marginTop: 10,
  },
});
