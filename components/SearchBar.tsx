import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { windowWidth } from "../constants/Layout";

type SearchBarProps = {
  text: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ text, onChangeText }) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.searchBar}>
      <AntDesign
        style={{ marginLeft: 10 }}
        name="search1"
        size={24}
        color={Colors[colorScheme].tint}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="e.g. Black Lotus"
        value={text}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    width: windowWidth * 0.8,
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    height: 40,
    margin: 10,
  },
});
