import styled from "styled-components";

export const ButtonStyles = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 16px;
    background: #df0144;
    font-family: "Mulish", sans-serif;
    font-weight: 300;
    // border: 1px solid #e30143;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 1px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    &:hover {
        background: #cb013e;
        color: #ffffff;
        transition: ease-in 0.1s;
    }
`;
