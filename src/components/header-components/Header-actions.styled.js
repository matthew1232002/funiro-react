import styled from "styled-components";

export const StyledHeaderActions = styled.div`
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  align-items: center;
`;

export const StyledHeaderActionsItemFav = styled.a`
  &:not(:last-child) {
    padding: 0 32px 0 0;
    
    color: #262F56;
    font-size: 24px;
    transition: color 0.3s ease;
    :hover {
        color: #E89F71;
      }
    
    @media (max-width: 479px) {
      padding: 0 20px 0 0;
    }
    @media (max-width: 767px) {
      margin: 0 0 15px 0;
    }
  }
`;

export const StyledHeaderCart = styled.div`
  &:not(:last-child) {
    padding: 0 32px 0 0;
    @media (max-width: 479px) {
      padding: 0 20px 0 0;
    }
  }
  @media (max-width: 767px) {
    margin: 0 0 15px 0;
  }
`;

export const StyledHeaderCartIcon = styled.a`
  color: #262F56;
  font-size: 24px;
  transition: color 0.3s ease;
  position: relative;
  display: block;
  :hover {
    color: #E89F71;
  }
`;

export const StyledHeaderActionsItemUser = styled.a`
  overflow: hidden;
  border-radius: 50%;
`;

