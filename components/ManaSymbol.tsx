import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Symbol } from "../utils/customTypes";
import { fetchAllSymbols } from "../utils/fetchData";
import { SymbolsContext } from "../hooks/SymbolsContext";

type ManaSymbolPops = {
  manaStr: string;
  cmc?: number;
};

const ManaSymbol: React.FC<ManaSymbolPops> = ({ manaStr, cmc }) => {
  //   const [symbols, setSymbols] = useState<Symbol[]>([]);
  const symbolsArray = manaStr.match(/{\w+}/g) || [];
  const symbols = useContext(SymbolsContext);
  const findSymbolImgUri = (symbolStr: string) => {
    let result =
      "https://c2.scryfall.com/file/scryfall-symbols/card-symbols/PW.svg";
    symbols.forEach((symbol) => {
      if (symbol.symbol === symbolStr) {
        result = symbol.svg_uri;
      }
    });
    return result;
  };

  //   useEffect(() => {
  //     const getAllSymbols = async () => {
  //       const data = await fetchAllSymbols();
  //       if (data !== null) {
  //         // setSymbols(data);
  //       }
  //     };
  //     getAllSymbols();
  //   }, [manaStr, cmc]);

  return (
    <View style={styles.container}>
      {symbolsArray.map((symbol, idx) => {
        return (
          <Image
            key={`${symbol}${idx}`}
            source={{
              uri: findSymbolImgUri(symbol),
              width: 25,
              height: 25,
            }}
          />
        );
      })}
    </View>
  );
};

export default ManaSymbol;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
