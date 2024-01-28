import styled from "styled-components";
import Masonry from "react-masonry-css"; // Import this from the masonry library you are using

export const MasonryStyle = styled(Masonry)`
    display: flex;
    width: 70%;
    margin-left: -30px; /* Add negative margin to counteract padding on the first column */
    background: rgba(224, 159, 62, 0.6);

    .my-masonry-grid_column {
        padding: 20px; /* Gutter size */
        background-clip: padding-box;
    }
`;
