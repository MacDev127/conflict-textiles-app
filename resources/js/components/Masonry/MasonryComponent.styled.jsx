import styled from "styled-components";
import Masonry from "react-masonry-css";
import pattern5 from "../../../../public/images/pattern5.png";

export const MasonryStyle = styled(Masonry)`
    display: flex;
    width: 60%;
    // background-image: url(${pattern5});

    height: 100%;
    .my-masonry-grid_column {
        padding: 20px; /* Gutter size */
        background-clip: padding-box;
    }
`;
