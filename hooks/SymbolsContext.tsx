import { createContext } from "react";
import { Symbol } from "../utils/customTypes";

export const SymbolsContext = createContext<Symbol[]>([]);
