import styled from "styled-components";

export const ReturnLinkStyle = styled.div`
    color: #000;
    font-size: 18px;
    display: flex;

    align-items: center;
    gap: 6px;

    a {
        color: #df0144;
        font-weight: 400;
        text-transform: uppercase;
    }
    a:hover {
        color: #dd294d;
        transition: ease-in 0.1s;
        weight: 300;
    }
`;
