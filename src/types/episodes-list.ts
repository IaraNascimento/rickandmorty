import { Episode } from "./episode";

export interface EpisodesInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface EpisodesList {
  info: EpisodesInfo;
  results: Array<Episode>;
}
