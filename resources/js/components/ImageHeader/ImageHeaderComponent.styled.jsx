import styled from "styled-components";

export const ImageHeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 70vh;
    position: relative;
    flex-direction: column;
    align-self: center;
    width: 100%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: scale 10s linear;
    }
    @keyframes scale {
        100% {
            width: 100%;
        }
    }

    .imageHeader__overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, 0.7);
    }

    .imageHeader__text {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        color: #fff;
        font-size: 36px;
        font-family: "Playfair Display", serif;
        font-weight: 400;
        text-align: left;
        line-height: 1.8;
        width: 60%;
    }

    .animate__animated.animate__fadeIn {
        --animate-duration: 4.5s;
    }

    @media (max-width: 1080px) {
        .imageHeader__text {
            font-size: 30px;
            width: 80%;
        }
    }
    @media (max-width: 768px) {
        .imageHeader__text {
            font-size: 26px;
            width: 80%;
        }
    }
    @media (max-width: 414px) {
        .imageHeader__text {
            font-size: 17px;
            width: 80%;
            align-self: center;
            text-align: left;
        }
    }
`;
