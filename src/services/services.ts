import axios from "axios";
import { handleRequestError } from "./error";
import { Episode } from "@/types/episode";

export async function getEpisode(id: number): Promise<Episode> {
  try {
    const url = `https://rickandmortyapi.com/api/episode/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
}
