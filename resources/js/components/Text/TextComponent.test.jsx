import React from "react";
import { render, screen } from "@testing-library/react";
import TextComponent from "./TextComponent"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe("TextComponent", () => {
    it("renders without crashing", () => {
        render(<TextComponent>Sample Text</TextComponent>);
        expect(screen.getByText("Sample Text")).toBeInTheDocument();
    });

    it("applies given className", () => {
        const className = "custom-class";
        render(
            <TextComponent className={className}>Sample Text</TextComponent>
        );
        const text = screen.getByText("Sample Text");
        expect(text).toHaveClass(className);
    });

    it("passes additional props to the TextStyle component", () => {
        const style = { color: "red" };
        render(<TextComponent style={style}>Sample Text</TextComponent>);
        const text = screen.getByText("Sample Text");
        expect(text).toHaveStyle("color: red");
    });

    it("renders children correctly", () => {
        render(
            <TextComponent>
                <span>Child Content</span>
            </TextComponent>
        );
        expect(screen.getByText("Child Content")).toBeInTheDocument();
    });
});
