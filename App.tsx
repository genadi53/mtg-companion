import { StatusBar } from "expo-status-bar";
import { createContext, useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SymbolsContext } from "./hooks/SymbolsContext";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Symbol } from "./utils/customTypes";
import { fetchAllSymbols } from "./utils/fetchData";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [symbols, setSymbols] = useState<Symbol[]>([]);

  useEffect(() => {
    const getAllSymbols = async () => {
      const data = await fetchAllSymbols();
      if (data !== null) {
        setSymbols(data);
      }
    };
    getAllSymbols();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <SymbolsContext.Provider value={symbols}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar hidden={true} />
        </SymbolsContext.Provider>
      </SafeAreaProvider>
    );
  }
}
