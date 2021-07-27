import styled from "styled-components";

export const StyledHeaderMain = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 494px;
  @media (max-width: 991.98px) {
    flex: 1 1 auto;
  }
`;

export const StyledHeaderLogo = styled.a`
  color: #000;
  font-weight: 700;
  font-size: 24px;
  line-height: 29 / 24 * 100%;
  position: relative;
  z-index: 5;
  @media (max-width: 479.98px) {
    padding: 0 10px 0 0;
  }
`;

export const StyledHeaderMenuBody = styled.nav`
  @media (max-width: 767.98px) {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
    top: 0;
    left: -100%;
    background-color: #fcf8f3;
    transition: left 0.3s ease;
    padding: 70px 15px 30px 15px;
    &::before {
      content: '';
      position: fixed;
      width: 100%;
      height: 50px;
      background-color: #fcf8f3;
      z-index: 2;
      top: 0;
      left: -100%;
      transition: left 0.3s ease;
    }
  }
`;

export const StyledHeaderMenuList = styled.ul`
  @media (min-width:767.98px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const StyledHeaderMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 3px;
  padding: 5px 0;
  position: relative;
  @media (max-width: 767px) {
    margin: 20px 0 15px 0;
  }
  @media (any-hover: hover) {
    &:hover {
      .menu__sub-list {
        transform: translate(0, 0);
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      .menu__arrow {
        transform: rotate(-180deg);
      }

      .menu__link,
      .menu__arrow {
        color: #E89F71;
      }
    }
  }

  &._hover {
    .menu__sub-list {
      transform: translate(0, 0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      @media (max-width: 767px) {
        width: 100%;
        margin: 10px 0 0 0;
        height: 130px;
      }
    }

    .menu__arrow {
      transform: rotate(-180deg);
    }

    .menu__link,
    .menu__arrow {
      color: #E89F71;
    }
  }

  @media (max-width:767px) {
    margin: 0 0 15px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledHeaderMenuSubList = styled.ul`
  position: absolute;
  display: block;
  background-color: #E89F71;
  padding: 15px;
  flex: 1 1 100%;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translate(0px, 10px);
  visibility: hidden;
  min-width: 200px;
  left: 0;
  pointer-events: none;
  top: 100%;
  z-index: 5;
  @media (max-width: 767px) {
    position: static;
    padding: 5px;
    height: 0;
  }
`;
export const StyledHeaderMenuSubItem = styled.li`
  &:not(:last-child) {
    margin: 0 0 5px 0;
    @media (max-width: 767px) {
      margin: 0 0 10px 0;
    }
  }
`;

