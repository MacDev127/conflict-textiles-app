import styled from "styled-components";
import Masonry from "react-masonry-css"; // Import this from the masonry library you are using

// Define your styled components, which will style the masonry grid and its columns
export const MasonryStyle = styled(Masonry)`
    display: flex;
    width: 60%;
    margin-left: -30px; /* Add negative margin to counteract padding on the first column */

    .my-masonry-grid_column {
        padding-left: 30px; /* Gutter size */
        background-clip: padding-box;
    }
`;
