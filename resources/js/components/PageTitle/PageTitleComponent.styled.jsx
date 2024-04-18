import styled from "styled-components";

export const PageTitleStyle = styled.h1`
    font-size: 3rem;
    margin: 3rem 0 2rem 0;
    letter-spacing: 2px;
    color: #313131;
    font-weight: 700;
    // font-family: "Quattrocento Sans", sans-serif;
    font-family: "Playfair Display", serif;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;

    @media (max-width: 414px) {
        font-size: 2rem;
        width: 80%;
    }
    @media (max-width: 768px) {
        font-size: 3rem;
        width: 100%;
        text-align: center;
    }
`;
