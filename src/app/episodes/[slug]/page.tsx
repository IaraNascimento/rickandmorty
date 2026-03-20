"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Episode } from "@/types/episode";
import { getEpisode } from "@/services/services";
import { Card, Title, Row, Label, Value, StyledLink } from "./styles";

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
    <Card>
      <Title>Episódio #{epInfo?.id}</Title>

      <Row>
        <Label>Nome:</Label>
        <Value>{epInfo?.name}</Value>
      </Row>

      <Row>
        <Label>Transmissão:</Label>
        <Value>{epInfo?.air_date}</Value>
      </Row>

      <Row>
        <Label>Código:</Label>
        <Value>{epInfo?.episode}</Value>
      </Row>
    </Card>
  );
}
