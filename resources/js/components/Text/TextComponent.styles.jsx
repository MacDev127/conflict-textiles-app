import styled from "styled-components";

export const TextStyle = styled.div`
    color: #313131;
    justify-content: center;
    align-items: center;
    width: 40%;
    text-align: justify;
    line-height: 2;
    font-size: 20px;
    font-weight: 400;
    font-family: "Mulish", sans-serif;

    // Adding media queries
    @media (max-width: 768px) {
        font-size: 18px; // Smaller font size for smaller screens
        width: 70%;
    }
    @media (max-width: 414px) {
        font-size: 18px; // Smaller font size for smaller screens
        width: 80%;
        line-height: 1.9;
    }
`;
