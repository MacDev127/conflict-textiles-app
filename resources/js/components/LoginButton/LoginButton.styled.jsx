import styled from "styled-components";

export const LoginButtonStyles = styled.button`
    color: crimson;
    padding: 24px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    height: 40px;
    background-color: #f5f4f4;
    position: relative;
    font-family: "Mulish", sans-serif;
    font-weight: 300;
    border: none;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

    &:hover {
        color: #cb013e;
    }
`;
