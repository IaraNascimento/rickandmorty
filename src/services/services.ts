import { api } from "./interceptor";
import { handleRequestError } from "./error";

import { EpisodesList } from "@/types/episodes-list";
import { Episode } from "@/types/episode";

import { CharactersList } from "@/types/characters-list";
import { Character } from "@/types/character";

export async function getAllEpisodes(page: number): Promise<EpisodesList> {
  try {
    const url = `https://rickandmortyapi.com/api/episode?page=${page}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export async function getEpisode(id: number): Promise<Episode> {
  try {
    const url = `https://rickandmortyapi.com/api/episode/${id}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export async function getAllCharacters(page: number): Promise<CharactersList> {
  try {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}

export async function getCharacter(id: number): Promise<Character> {
  try {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}
