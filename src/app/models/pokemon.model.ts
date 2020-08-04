export class Pokemon {
  artist?: string;
  convertedRetreatCost?: number;
  evolvesFrom?: string;
  hp?: string;
  id: string;
  imageUrl: string;
  imageUrlHiRes: string;
  name: string;
  nationalPokedexNumber?: number;
  number?: number;
  rarity?: string;
  retreatCost?: Array<string>;
  series?: string;
  set?: string;
  setCode?: string;
  subtype?: string;
  supertype?: string;
  types: Array<string>;
  resistances?: Array<any>;
  weaknesses?: Array<any>;
  attacks: Array<any>;
}

export class PokemonApiResponse {
  cards: Array<Pokemon>;
}

export class PokemonCard {
  src: string;
  title: string;
  id: string;
  types?: Array<string>;
  resistances?: Array<any>;
  weaknesses?: Array<any>;
  attacks?: Array<any>;
}

export class PokemonAttack {
  convertedEnergyCost?: number;
  cost?: Array<string>;
  damage?: string;
  name?: string;
  text?: string;
}
