import React from "react";
import { MasonryStyle } from "./MasonryComponent.styled";

const MasonryComponent = ({ children }) => {
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <MasonryStyle
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {children}
        </MasonryStyle>
    );
};

export default MasonryComponent;
