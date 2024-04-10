import { FaRegCirclePlay } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import styled from "styled-components";

export const PlayIcon = styled(FaRegCirclePlay)`
    font-size: 30px;
    &:hover {
        color: #e30143;
    }
    margin-right: 20px;

    @media (max-width: 768px) {
        font-size: 22px; // Smaller font size for smaller screens
        margin-right: 0;
    }
`;

export const ArrowIcon = styled(FaArrowRight)`
    margin-left: 10px;
    font-size: 16px;
`;
