import React from "react";
import { render } from "@testing-library/react";
import MasonryComponent from "./MasonryComponent";

describe("MasonryComponent", () => {
    it("renders children with specified breakpoints and classNames", () => {
        const breakpoints = {
            default: 3,
            1100: 2,
            700: 1,
        };

        const { container } = render(
            <MasonryComponent className="test-class" breakpoints={breakpoints}>
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </MasonryComponent>
        );

        // Assert the presence of the className
        expect(container.firstChild.classList.contains("test-class")).toBe(
            true
        );

        // Assert the number of columns rendered
        const columns = container.querySelectorAll(".my-masonry-grid_column");
        expect(columns.length).toBe(3); // Adjusted the expected length to 3
    });
});
