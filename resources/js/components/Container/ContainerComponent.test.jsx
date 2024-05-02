import React from "react";
import { render, screen } from "@testing-library/react";
import ContainerComponent from "./ContainerComponent"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe("ContainerComponent", () => {
    it("renders without crashing", () => {
        render(<ContainerComponent>Sample Content</ContainerComponent>);
        expect(screen.getByText("Sample Content")).toBeInTheDocument();
    });

    it("renders children correctly", () => {
        render(
            <ContainerComponent>
                <span>Child Content</span>
            </ContainerComponent>
        );
        expect(screen.getByText("Child Content")).toBeInTheDocument();
    });
});
