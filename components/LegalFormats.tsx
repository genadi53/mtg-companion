import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

type Legalities = {
  alchemy: string;
  brawl: string;
  commander: string;
  explorer: string;
  pioneer: string;
  modern: string;
  legacy: string;
  historic: string;
  vintage: string;
  pauper: string;
  penny: string;
};

const formats = [
  ["standard", "alchemy"],
  ["pioneer", "explorer"],
  ["modern", "brawl"],
  ["legacy", "historic"],
  ["vintage", "pauper"],
  ["commander", "penny"],
];

type LegalFormatsProps = {
  legalities: Legalities;
};

const matchColor = (legality: string) => {
  if (legality === "not_legal") return Colors.legal.notLegal;
  else if (legality === "legal") return Colors.legal.legal;
  else if (legality === "banned") return Colors.legal.banned;
  if (legality === "restricted") return Colors.legal.restricted;
  else return Colors.legal.notLegal;
};

const LegalFormats: React.FC<LegalFormatsProps> = ({ legalities }) => {
  return (
    <View>
      {formats.map((entries, idx) => {
        return (
          <View key={idx} style={styles.row}>
            <View style={styles.sides}>
              <View
                style={[
                  styles.legality,
                  {
                    backgroundColor: matchColor(legalities[entries[0]]),
                  },
                ]}
              >
                <Text style={styles.textLegality}>
                  {legalities[entries[0]].replace("_", " ").toUpperCase()}
                </Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.textFormat}>{`${entries[0]
                  .charAt(0)
                  .toUpperCase()}${entries[0].slice(1)}`}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View
                style={[
                  styles.legality,
                  {
                    backgroundColor: matchColor(legalities[entries[1]]),
                  },
                ]}
              >
                <Text style={styles.textLegality}>
                  {legalities[entries[1]].replace("_", " ").toUpperCase()}
                </Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.textFormat}>{`${entries[1]
                  .charAt(0)
                  .toUpperCase()}${entries[1].slice(1)}`}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default LegalFormats;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
  },
  sides: {
    flexDirection: "row",
    width: "50%",
    marginRight: 20,
  },
  legality: {
    width: 85,
    borderRadius: 2.5,
    padding: 2.5,
  },
  textLegality: { textAlign: "center", color: "white", fontWeight: "600" },
  textFormat: {
    textAlign: "center",
    fontSize: 15,
  },
});
