import styled from "styled-components";
import backgroundImage from "../../../public/construction.webp";

export const ConstructionAlert = styled.div`
  line-height: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: calc(96vh - 160px);
  padding: 0 40px;
  align-items: center;

  h2 {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 8px;
  }

  ::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("${backgroundImage.src}");
    background-size: cover;
    opacity: 0.1;
    z-index: -1;
  }
`;
