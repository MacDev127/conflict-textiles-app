import React from "react";
import { render, screen } from "@testing-library/react";
import TitleComponent from "./TitleComponent";
import "@testing-library/jest-dom";

describe("TitleComponent", () => {
    it("renders without crashing", () => {
        render(<TitleComponent>Test Title</TitleComponent>);
        expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("applies given className", () => {
        const className = "custom-class";
        render(
            <TitleComponent className={className}>Test Title</TitleComponent>
        );
        const title = screen.getByText("Test Title");
        expect(title).toHaveClass(className);
    });

    it("passes additional props to the TitleStyle component", () => {
        const style = { color: "blue" };
        render(<TitleComponent style={style}>Test Title</TitleComponent>);
        const title = screen.getByText("Test Title");
        expect(title).toHaveStyle("color: blue");
    });

    it("renders children correctly", () => {
        render(
            <TitleComponent>
                <span>Child Content</span>
            </TitleComponent>
        );
        expect(screen.getByText("Child Content")).toBeInTheDocument();
    });
});
