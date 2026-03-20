import styled from "styled-components";

export const Card = styled.div`
  max-width: 400px;
  padding: 24px;
  margin: 16px 40px;
  border-radius: 12px;

  background: #0b0f1a;
  border: 1px solid #1f2a44;

  box-shadow: 0 0 10px rgba(0, 234, 255, 0.1);

  color: #e6f7ff;
  font-family: system-ui, sans-serif;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;

  color: #39ff14;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Label = styled.span`
  font-size: 16px;
  color: #8aa0c6;
`;

export const Value = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

export const StyledLink = styled.a`
  font-size: 16px;
  color: #00eaff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
