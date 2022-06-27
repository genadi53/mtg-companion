export type Card = {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  mtgo_id: number;
  arena_id: number;
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris?: [];
  cmc: number;
  type_line: string;
  color_identity: string[];
  keywords: string[];
  produced_mana: string[];
  card_faces?: CardFacesDetails[];
  legalities: object;
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  oracle_text?: string;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: number;
  digital: boolean;
  rarity: string;
  artist: string;
  artist_ids: string[];
  border_color: string;
  frame: string;
  frame_effects?: [];
  security_stamp?: string;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  edhrec_rank?: number;
  penny_rank?: number;
  preview: object;
  prices: object;
  related_uris: object;
  purchase_uris: object;
};

export type Set = {
  object: string;
  id: string;
  code: string;
  mtgo_code: string;
  arena_code: string;
  tcgplayer_id: number;
  name: string;
  uri: string;
  scryfall_uri: string;
  search_uri: string;
  released_at: string;
  set_type: string;
  card_count: number;
  printed_size: number;
  digital: boolean;
  nonfoil_only: boolean;
  foil_only: boolean;
  block_code: string;
  block: string;
  icon_svg_uri: string;
};

export type ReturnData = {
  object: string;
  total_cards: number;
  has_more: boolean;
  data: Card[];
  next_page?: string;
};

export type ImageTypes = {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop?: string;
  border_crop?: string;
};

export type CardFacesDetails = {
  object: string;
  name: string;
  mana_cost: string;
  type_line: string;
  oracle_text: string;
  colors: string[];
  artist: string;
  artist_id: string;
  illustration_id: string;
  image_uris: ImageTypes;
};
