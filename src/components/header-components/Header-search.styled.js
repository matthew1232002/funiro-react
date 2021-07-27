import styled from "styled-components";

export const StyledHeaderSearchForm = styled.div`
  max-width: 473px;
`;

export const StyledHeaderSearch = styled.div`
  flex: 1 1 auto;
  padding: 0 20px 0 0;
`;


export const StyledHeaderSearchFormIcon = styled.button`
  position: relative;
  z-index: 5;
  font-size: 22px;
  color: #262F56;
  padding: 0 32px 0 0;
  background-color: inherit;
  @media (min-width: 991px) {
    display: none;

  }
  @media (max-width: 767px) {
    padding: 0 32px 0 0;
  }
  @media (max-width: 479px) {
    padding: 0 20px 0 0;
  }
`;

export const StyledHeaderSearchFormItem = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    box-shadow: 0 0 5px rgba(212, 209, 205, 0.3);
    position: absolute;
    width: 100%;
    left: 0;
    top: -100%;
    z-index: 5;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
`;

export const StyledHeaderSearchFormBtn = styled.button`
  flex: 0 0 45px;
  height: 45px;
  font-size: 15px;
  color: #333333;
  background-color: inherit;
`;

export const StyledHeaderSearchFormInput = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 0 20px 0 0;
  color: #616161;
`;

