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
  "alchemy",
  "brawl",
  "commander",
  "explorer",
  "pioneer",
  "modern",
  "legacy",
  "historic",
  "vintage",
  "pauper",
  "penny",
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
      <Text>LegalFormats</Text>
      {formats.map((format, idx) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: matchColor(legalities[format]),
                width: 85,
                alignItems: "center",
              }}
            >
              <Text>{legalities[format].replace("_", " ").toUpperCase()} </Text>
            </View>
            <View style={{}}>
              <Text>{format}</Text>
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
  block: {},
  text: {},
});
