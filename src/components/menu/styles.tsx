import styled from "styled-components";

export const MenuNavigation = styled.nav`
  padding: 16px;
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      margin-bottom: 12px;
    }

    a {
      display: block;
      padding: 10px 14px;
      text-decoration: none;
      color: #e2e8f0;
      font-weight: 500;
      border-radius: 8px;
      transition: all 0.25s ease;

      &:hover {
        background: #1e293b;
        color: #38bdf8;
        transform: translateY(-4px);
      }
    }
  }
`;
