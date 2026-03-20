"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Episode } from "@/types/episode";
import { getEpisode } from "@/services/services";

export default function SingleEpisodePage() {
  const params = useParams();
  const slug = params.slug as string;
  const id = Number(slug);

  const [epInfo, setEpInfo] = useState<Episode | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const data = await getEpisode(id);
        setEpInfo(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Informações do episódio de número {id}</h1>
      <p>id: {epInfo?.id}</p>
      <p>name: {epInfo?.name}</p>
      <p>exibição: {epInfo?.air_date}</p>
      <p>código: {epInfo?.episode}</p>
      {/* <p>personagens: {epInfo?.characters.map(el => el)}</p> */}
      <p>link: {epInfo?.url}</p>
    </div>
  );
}
