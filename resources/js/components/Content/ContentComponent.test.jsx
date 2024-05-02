import React from "react";
import { render, screen } from "@testing-library/react";
import ContentComponent from "./ContentComponent"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe("ContentComponent", () => {
    it("renders without crashing", () => {
        render(<ContentComponent>Sample Content</ContentComponent>);
        expect(screen.getByText("Sample Content")).toBeInTheDocument();
    });

    it("renders children correctly", () => {
        render(
            <ContentComponent>
                <span>Child Content</span>
            </ContentComponent>
        );
        expect(screen.getByText("Child Content")).toBeInTheDocument();
    });
});
