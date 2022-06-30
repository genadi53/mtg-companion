import { Card, ReturnData, Set, Symbol } from "./customTypes";

export const getAllSets = async () => {
  const result = await fetch(`https://api.scryfall.com/sets`);
  const sets = await result.json();
  console.log(sets);
  return sets;
};

// https://api.scryfall.com/cards/search

export const fetchSampleCards = async (name: string) => {
  const cards: Card[] = [];
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
      const card = await result.json();
      cards.push(card);
      return cards;
    }
    return null;
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

export const fetchCardById = async (id: string) => {
  try {
    const result = await fetch(`https://api.scryfall.com/cards/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.status === 200) {
      const card: Card = await result.json();
      return card;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchSetByName = async (name: string) => {
  try {
    const result = await fetch(`https://api.scryfall.com/sets/${name}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.status === 200) {
      const set: Set = await result.json();
      return set;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchAllSymbols = async () => {
  try {
    const result = await fetch(`https://api.scryfall.com/symbology`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.status === 200) {
      const { data }: { data: Symbol[] } = await result.json();
      console.log(data);
      return data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
