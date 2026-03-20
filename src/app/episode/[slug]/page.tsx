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
      <h1>Welcome to {id}</h1>
      <p>{epInfo?.name}</p>
    </div>
  );
}
