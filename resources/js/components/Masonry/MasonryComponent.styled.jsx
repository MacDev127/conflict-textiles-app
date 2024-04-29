import styled from "styled-components";
import Masonry from "react-masonry-css";

export const MasonryStyle = styled(Masonry)`
    display: flex;
    width: 60%;
    background: #ececec;
    padding: 10px;
    margin-top: 100px;
    margin-bottom: 100px;

    height: 100%;
    .my-masonry-grid_column {
        padding: 18px;
        background-clip: padding-box;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
    @media (max-width: 414px) {
        width: 90%; // This can include more specific styles for smaller screens
    }
`;
