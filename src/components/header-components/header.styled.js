import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  min-height: 40px;
  @media (max-width: 767.98px) {
    min-height: 5px;
  }
`;

export const StyledHeaderWrapper = styled.div`
  transition: background-color 0.3s ease;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 99;
`;

export const StyledHeaderBody = styled.div`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 5px 0;
  min-height: 125px;
  position: relative;
  @media (max-width: 991.98px) {
    min-height: 80px;
  }
  @media (max-width: 767.98px) {
    min-height: 50px;

  }
`;


