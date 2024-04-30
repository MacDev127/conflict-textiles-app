import styled from "styled-components";

export const ImageContainer = styled.div`
    position: relative;

    img {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: block;
        transition: transform 0.3s ease-in-out;
    }

    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 100%,
            rgba(0, 0, 0, 0.2) 100%
        );
        opacity: 0;
        transition: opacity 0.1s;
        pointer-events: none;
        &:hover {
            opacity: 0.9;
        }
    }
`;
export const SearchBarContainer = styled.div`
    margin-bottom: 120px;
`;

export const CollectionItemStyle = styled.div`
    position: relative;

    &:hover .overlay {
        opacity: 0.9;
    }
`;

export const ItemDescStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0 30px 0;
    color: #000;
    h2 {
        font-size: 16px;
        font-weight: 400;
    }
`;
