import styled from "styled-components";
import Masonry from "react-masonry-css";

export const MasonryStyle = styled(Masonry)`
    display: flex;
    width: 60%;
    background: #ececec;
    padding: 10px;
    margin-bottom: 100px;

    height: 100%;
    .my-masonry-grid_column {
        padding: 18px;
        background-clip: padding-box;
    }
`;
