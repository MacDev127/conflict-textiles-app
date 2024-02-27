import styled from "styled-components";

export const ButtonStyles = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    padding: 0.8em 1.8em;
    background: transparent;
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    border: 1px solid #df0144;
    color: #313131;
    cursor: pointer;
    font-size: 19px;

    &:hover {
        background: #df0144;
        color: #ffffff;
        transition: ease-in 0.2s;
    }
`;
