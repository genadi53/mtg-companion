export const getAllSets = async () => {
  const result = await fetch(`https://api.scryfall.com/sets`);
  const sets = await result.json();
  console.log(sets);
  return sets;
};

// https://api.scryfall.com/cards/search

export const fetchSampleCards = async (name: string, filters?: {}) => {
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
        body: filters ? JSON.stringify(filters) : null,
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
