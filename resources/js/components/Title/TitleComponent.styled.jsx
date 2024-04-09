import styled from "styled-components";

export const TitleStyle = styled.h1`
    font-size: 4rem;
    margin: 8rem 0 1rem 0;
    letter-spacing: 2px;
    color: #313131;
    font-weight: 700;
    // font-family: "Quattrocento Sans", sans-serif;
    font-family: "Playfair Display", serif;

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
