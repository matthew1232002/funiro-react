import styled from "styled-components";

export const StyledLink = styled.a`
  font-weight: 500;
  color: inherit;
  transition: color 0.3s ease;
  @media (max-width: 767px) {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const StyledSubLink = styled.a`
  color: #fff;
  line-height: 120%;
  @media (any-hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;