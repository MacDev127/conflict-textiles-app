import styled from "styled-components";

export const ImageHeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    position: relative;
    flex-direction: column;
    align-self: center;

    img {
        width: 120%;
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
        background: rgba(0, 0, 0, 0.6);
    }

    .imageHeader__text {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        color: #f4f4f4;
        font-size: 38px;
        font-family: "Playfair Display", serif;
        font-weight: 400;
        letter-spacing: 1px;
        text-align: left;
        margin: 10px;
        line-height: 1.8;
    }

    .animate__animated.animate__fadeIn {
        --animate-duration: 4.5s;
    }

    @media (max-width: 768px) {
        .imageHeader__text {
            font-size: 24px;
            width: 80%;
        }
    }
    @media (max-width: 414px) {
        .imageHeader__text {
            font-size: 20px;
            width: 80%;
        }
    }
`;
