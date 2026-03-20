import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 20px;
  max-width: 100%;
  flex-wrap: wrap;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 6px;

  background-color: ${({ $active }) => ($active ? "#333" : "#eee")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#333" : "#ddd")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
