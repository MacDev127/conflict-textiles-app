import styled from "styled-components";
import Masonry from "react-masonry-css";

export const MasonryStyle = styled(Masonry)`
    display: flex;
    width: 60%;
    background: #ececec;
    padding: 10px;

    height: 100%;
    .my-masonry-grid_column {
        padding: 18px; /* Gutter size */
        background-clip: padding-box;
    }
`;
