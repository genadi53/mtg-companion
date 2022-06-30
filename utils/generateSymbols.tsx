import { fetchAllSymbols } from "./fetchData";

export const generateSymbolsArray = async (manaStr: string) => {
  const symbolsArray = manaStr.match(/{\w+}/g) || [];
  const symbols = await fetchAllSymbols();
  let result = null;
  //   let result2 = str.match(/(?<={)\w+(?=})/g) || [];
  //   const strArray = manaStr.split(/[{}]/);
  //   console.log(result2);

  result = <></>;

  return result;
};
