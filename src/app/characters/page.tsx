"use client";

import { useEffect, useState } from "react";
import { Pagination } from "@/components/pagination/pagination";
import { getAllCharacters } from "@/services/services";
import { CharactersInfo } from "@/types/characters-list";
import { Character } from "@/types/character";
import { Wrap } from "./styles";
import Card from "@/components/card/card";

export default function AllCharactersPage() {
  const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState<CharactersInfo | null>(null);
  const [characters, setcharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllCharacters(page);
        setPagination(data.info);
        setcharacters(data.results);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [page]);

  return (
    <Wrap>
      <ul>
        {characters.map((ch) => (
          <li key={ch.id}>
            <Card url={"characters/" + ch.id} text={ch.name} size="big" />
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
