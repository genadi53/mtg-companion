import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import CardInfo from "../components/CardInfo";
import CardPreview from "../components/CardPreview";
import { Text, View } from "../components/Themed";
import { windowHeight, windowWidth } from "../constants/Layout";
import { Card } from "../utils/customTypes";
import { fetchCardById } from "../utils/fetchData";

export default function CardInfoScreen() {
  const route = useRoute();
  const { id }: { id: string } = route.params;
  const [card, setCard] = useState<Card | null>(null);

  useEffect(() => {
    const fetchById = async () => {
      const res = await fetchCardById(id);
      setCard(res);
    };
    fetchById();
  }, [id]);

  return (
    <ScrollView>
      {card ? (
        <View style={styles.cardContainer}>
          <View style={{ marginVertical: 20 }}>
            <CardPreview card={card} width={300} height={350} />
          </View>

          <View>
            <CardInfo card={card}></CardInfo>
          </View>
        </View>
      ) : (
        <Text>Loading ...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
