import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet } from "react-native";
import CardPreview from "../components/CardPreview";
import { Text, View } from "../components/Themed";
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
    <ScrollView style={styles.container}>
      {card ? (
        <CardPreview card={card} width={300} height={350} />
      ) : (
        <Text>Loading ...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
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
