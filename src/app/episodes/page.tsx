"use client";

import { useEffect, useState } from "react";
import { Pagination } from "@/components/pagination/pagination";
import { getAllEpisodes } from "@/services/services";
import { EpisodesInfo } from "@/types/episodes-list";
import { Episode } from "@/types/episode";
import { Wrap } from "./styles";
import Card from "@/components/card/card";

export default function AllEpisodesPage() {
  const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState<EpisodesInfo | null>(null);
  const [episodes, setEpisodes] = useState<Array<Episode>>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllEpisodes(page);
        setPagination(data.info);
        setEpisodes(data.results);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [page]);

  return (
    <Wrap>
      <ul>
        {episodes.map((ep) => (
          <li key={ep.id}>
            <Card ep={ep} />
          </li>
        ))}
      </ul>

      {pagination && (
        <Pagination
          currentPage={page}
          totalPages={pagination?.pages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      )}
    </Wrap>
  );
}
