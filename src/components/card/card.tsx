import { useState, useEffect } from "react";
import {
  Border,
  Content,
  Text,
  Portal,
  StyledCard,
  StyledLink,
} from "./styles";

interface CardProps {
  url: string;
  text: string;
  size?: "big" | "small";
}

export default function Card({ url, text, size }: CardProps) {
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
    <StyledCard $big={size === "big"}>
      {" "}
      <Border />
      <Portal />
      <Content>
        <Text $isGlitching={isGlitching}>
          <StyledLink href={url}>{text}</StyledLink>
        </Text>
      </Content>
    </StyledCard>
  );
}
