import React from "react"; // Ensure this line is present
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // For extending jest matchers
import ButtonComponent from "./ButtonComponent"; // Adjust the import path as necessary

describe("ButtonComponent Tests", () => {
    test("renders the button with provided text", () => {
        const buttonText = "Click Me";
        render(<ButtonComponent>{buttonText}</ButtonComponent>);

        const button = screen.getByText(buttonText);
        expect(button).toBeInTheDocument();
    });

    test("applies given className", () => {
        const className = "custom-class";
        render(
            <ButtonComponent className={className}>Click Me</ButtonComponent>
        );

        const button = screen.getByText("Click Me");
        expect(button).toHaveClass(className);
    });

    test("passes additional props to the button styled component", () => {
        const buttonText = "Click Me";
        const onClick = jest.fn();
        render(
            <ButtonComponent onClick={onClick}>{buttonText}</ButtonComponent>
        );

        const button = screen.getByText(buttonText);
        button.click();
        expect(onClick).toHaveBeenCalled();
    });
});
