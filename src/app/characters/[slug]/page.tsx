"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Character } from "@/types/character";
import { getCharacter } from "@/services/services";
import { Wrap, Title, Row, Label, Value, Inner } from "./styles";
import Card from "@/components/card/card";

export default function SingleCharacterPage() {
  const params = useParams();
  const slug = params.slug as string;
  const id = Number(slug);

  const [chInfo, setChInfo] = useState<Character | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const data = await getCharacter(id);
        console.log({ data });
        setChInfo(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id]);

  return (
    <Wrap>
      <Inner>
        <Title>Personagem #{chInfo?.id}</Title>

        <img src={chInfo?.image} />

        <Row>
          <Label>Nome:</Label>
          <Value>{chInfo?.name}</Value>
        </Row>

        <Row>
          <Label>Estado:</Label>
          <Value>{chInfo?.status}</Value>
        </Row>
      </Inner>

      <Inner>
        <Row>
          <Label>Episódios:</Label>
          <ul>
            {chInfo?.episode?.map((ep) => (
              <li key={ep.split("/").pop()}>
                <Card
                  url={"/episodes/" + ep.split("/").pop()}
                  text={ep?.split("/").pop() || ""}
                />
              </li>
            ))}
          </ul>
        </Row>
      </Inner>
    </Wrap>
  );
}
