import { useState, useEffect } from "react";
import { Episode } from "@/types/episode";
import Link from "next/link";
import { Border, Content, EpisodeNumber, Portal, StyledCard } from "./styles";

interface CardProps {
  ep: Episode;
}

export default function Card({ ep }: CardProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const triggerGlitch = () => {
      setIsGlitching(true);

      setTimeout(() => {
        setIsGlitching(false);
      }, 1000);

      const nextTime = 1000 + Math.random() * 3000;

      timeout = setTimeout(triggerGlitch, nextTime);
    };

    const initialDelay = Math.random() * 2000;

    timeout = setTimeout(triggerGlitch, initialDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledCard>
      {" "}
      <Border />
      <Portal />
      <Content>
        <EpisodeNumber $isGlitching={isGlitching}>
          <Link href={`episodes/${ep.id}`}>
            {ep.id.toString().padStart(3, "0")}
          </Link>
        </EpisodeNumber>
      </Content>
    </StyledCard>
  );
}
