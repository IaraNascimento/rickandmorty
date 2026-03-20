import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

// 🔥 Animações caóticas
const pulse = keyframes`
  0% { box-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14; }
  50% { box-shadow: 0 0 20px #00eaff, 0 0 30px #39ff14; }
  100% { box-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14; }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-1px, 1px); }
  80% { transform: translate(1px, -1px); }
  100% { transform: translate(0); }
`;

const rotateBorder = keyframes`
  0% { background-position: 0% }
  100% { background-position: 200% }
`;

// 🧬 Container principal
export const StyledCard = styled.div<{
  $big: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  line-height: 48px;

  width: ${({ $big }) => ($big ? "320px" : "120px")};
  font-size: ${({ $big }) => ($big ? "12px" : "24px")};

  background: linear-gradient(135deg, #0b0f1a, #020305);

  animation: ${pulse} 3s infinite;

  &:hover {
    transform: scale(1.05) rotate(-0.5deg);
  }
`;

// 🌀 Borda animada radioativa
export const Border = styled.div`
  position: absolute;
  inset: 0;
  padding: 2px;
  border-radius: 16px;

  background: linear-gradient(120deg, #39ff14, #00eaff, #ff00c8, #39ff14);
  background-size: 200%;

  animation: ${rotateBorder} 4s linear infinite;

  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
`;

// 🧠 Conteúdo
export const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  color: #d5fffa;
  font-family: "Courier New", monospace;
`;

// 🔢 Número do episódio com glitch
export const Text = styled.h1<{
  $isGlitching: boolean;
}>`
  width: 100%;
  overflow: hidden;
  font-weight: bold;
  color: #39ff14;

  text-shadow:
    0 0 5px #39ff14,
    0 0 10px #39ff14,
    0 0 20px #00eaff;

  ${({ $isGlitching }) =>
    $isGlitching &&
    css`
      animation: ${glitch} 0.3s linear;
    `}
`;

// 🧪 Efeito de portal no fundo
export const Portal = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;

  background: radial-gradient(circle, #39ff14 0%, transparent 60%);
  opacity: 0.08;

  transform: rotate(25deg);
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  text-align: center;
`;
