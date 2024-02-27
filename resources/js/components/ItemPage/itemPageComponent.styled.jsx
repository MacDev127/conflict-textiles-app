import styled from "styled-components";

export const ImageContainer = styled.div`
    position: relative;

    img {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: block;
    }

    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: 1s;
        pointer-events: none;
        &:hover {
            opacity: 0.9;
        }
    }
`;

export const CollectionItemStyle = styled.div`
    position: relative;

    &:hover .overlay {
        opacity: 0.9;
    }

    .collection-item-detail a {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 1s;
        color: #fff;
        font-weight: 300;
        font-size: 22px;
        cursor: pointer;
        text-align: left;
        z-index: 2;
        opacity: 0;
    }

    &:hover .collection-item-detail a {
        opacity: 1;
        transition: ease-in 0.5s;
    }
`;

export const ItemDescStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 14px 0 30px 0;
    color: #000;
    h2 {
        font-size: 18px;
        font-weight: 400;
    }
`;
