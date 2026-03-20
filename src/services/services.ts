import { api } from "./interceptor";
import { handleRequestError } from "./error";

import { Episode } from "@/types/episode";
import { EpisodesList } from "@/types/episodes-list";

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
