import styled from "styled-components";
import ReactPlayer from "react-player";
import { FaRegCirclePlay } from "react-icons/fa6";

export const ModalWrapper = styled.div`
    position: relative;
    z-index: 1;
`;
export const IconWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin:  50px 0;
gap: 10px;

p{
    font-size: 20px
}
}
`;

export const VideoPlayer = styled(ReactPlayer)`
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    @media (max-width: 414px) {
        max-height: 30vh !important;
        width: 100% !important;
    }
`;

export const PlayIcon = styled(FaRegCirclePlay)`
    font-size: 30px;
    &:hover {
        color: #e30143;
    }

    @media (max-width: 768px) {
        font-size: 22px; // Smaller font size for smaller screens
    }
`;
