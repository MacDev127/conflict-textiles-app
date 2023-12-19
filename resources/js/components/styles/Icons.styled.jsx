import { FaRegCirclePlay } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import ReactPlayer from "react-player";
import styled from "styled-components";

export const PlayIcon = styled(FaRegCirclePlay)`
    font-size: 30px;
    &:hover {
        color: #e30143;
    }
    margin-right: 20px;
`;

export const VideoPlayer = styled(ReactPlayer)`
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const ArrowIcon = styled(FaArrowRight)`
    margin-left: 10px;
    font-size: 16px;
`;
