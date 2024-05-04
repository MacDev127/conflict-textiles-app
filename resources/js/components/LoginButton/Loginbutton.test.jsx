import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginButton from "../LoginButton/LoginButton";
describe("LoginButton", () => {
    it("renders the button with the provided children", () => {
        const childText = "Login";
        render(<LoginButton>{childText}</LoginButton>);

        // Check if the button renders with the correct text
        expect(screen.getByText(childText)).toBeInTheDocument();
        // Optionally, check if the icon is also rendered
        expect(screen.getByTestId("user-icon")).toBeInTheDocument();
    });
});
