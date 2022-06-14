import { Card, ReturnData } from "./customTypes";

export const getAllSets = async () => {
  const result = await fetch(`https://api.scryfall.com/sets`);
  const sets = await result.json();
  console.log(sets);
  return sets;
};

// https://api.scryfall.com/cards/search

export const fetchSampleCards = async (name: string) => {
  console.log(name);
  const str = name.replace(" ", "+").toLowerCase();
  // console.log(filters);
  try {
    const result = await fetch(
      `https://api.scryfall.com/cards/named?fuzzy=${str}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.status === 200) {
      const cards = await result.json();
      // console.log(cards);
      return cards;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchMultipleCards = async (name: string, filters?: {}) => {
  console.log(name);
  const cards: Card[] = [];
  const str = name.replace(" ", "+").toLowerCase();
  let isFinished = false;
  // console.log(filters);
  try {
    let result = await fetch(
      `https://api.scryfall.com/cards/search?q=${str}
    `,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // do {
    if (result === null || result.status !== 200) return null;
    let fetchData: ReturnData = await result.json();

    cards.push(...fetchData.data);
    return cards;
    //   if (fetchData.has_more) {
    //     result = await fetch(fetchData.next_page!);
    //   } else {
    //     isFinished = true;
    //   }
    // } while (!isFinished);
  } catch (error) {
    console.log(error);
    return null;
  }
};
