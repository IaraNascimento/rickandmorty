import styled from "styled-components";

export const Portal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 24vw;
  height: 72vh;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: radial-gradient(
    circle at center,
    #a8ff00 0%,
    #6aff00 25%,
    #2aff00 50%,
    #0f5f00 75%,
    #021a00 100%
  );

  box-shadow:
    0 0 40px #6aff00,
    0 0 80px #2aff00,
    0 0 120px #0f5f00;

  animation: pulse 2s infinite ease-in-out;

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      filter: brightness(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.05);
      filter: brightness(1.3);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      filter: brightness(1);
    }
  }
`;
