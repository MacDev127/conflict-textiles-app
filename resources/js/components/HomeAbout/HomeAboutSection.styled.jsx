import styled from "styled-components";
import ReactPlayer from "react-player";

export const ModalWrapper = styled.div`
    position: relative;
    z-index: 1;
`;
export const IconWrapper = styled.div`
display: flex;
align-items: center;
cursor: pointer;
margin: 0 10px;
}
`;

export const Image = styled.img`
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin-top: 50px;
    height: 600px;
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
