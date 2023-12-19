import styled from 'styled-components';

export const ButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 18px 16px;
  background: #dc143c;
  border: 1px solid #dc143c;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 1px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  &:hover {
    background: transparent;
    color: #000;
    transition: ease-in 0.1s;
  }
`;
