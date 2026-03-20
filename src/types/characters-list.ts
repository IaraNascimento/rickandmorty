import { Character } from "./character";

export interface CharactersInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharactersList {
  info: CharactersInfo;
  results: Array<Character>;
}
