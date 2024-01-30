import styled from "styled-components";

export const ButtonStyles = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 0.8em 1.8em;
    background: transparent;
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    border: 1px solid #df0144;
    color: #000;
    cursor: pointer;
    font-size: 19px;

    &:hover {
        background: #df0144;
        color: #ffffff;
        transition: 0.3s;
    }

    //test

    // padding: 0.8em 1.8em;
    // margin-top: 50px;
    // border: 1px solid #df0144;
    // position: relative;
    // overflow: hidden;
    // background-color: transparent;
    // text-align: center;
    // text-transform: uppercase;
    // font-size: 16px;
    // transition: 0.3s;
    // z-index: 1;
    // font-family: inherit;
    // color: #000;
    // font-family: "Mulish", sans-serif;
    // font-weight: 400;

    // &:before {
    //     content: "";
    //     width: 0;
    //     height: 300%;
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     background: #df0144;
    //     transition: 0.5s ease;
    //     display: block;
    //     z-index: -1;
    // }

    // &:hover::before {
    //     width: 100%;
    // }

    // &:hover {
    //     color: #f4f4f4;
    // }
`;
