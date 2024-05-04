import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DropdownMenu from "../Dropdown/Dropdown";

// Mocking router from @inertiajs/react
jest.mock("@inertiajs/react", () => ({
    router: {
        visit: jest.fn(),
    },
}));

describe("DropdownMenu", () => {
    it("toggles dropdown on click", () => {
        render(<DropdownMenu />);
        const dropdownButton = screen.getByRole("button", {
            name: /language/i,
        });

        fireEvent.click(dropdownButton);
        expect(screen.getByText("English")).toBeVisible();
        fireEvent.click(dropdownButton);
        expect(screen.queryByText("English")).not.toBeInTheDocument();
    });

    it("displays all language options when open", () => {
        render(<DropdownMenu />);
        fireEvent.click(screen.getByRole("button", { name: /language/i }));
        expect(screen.getByText("English")).toBeInTheDocument();
        expect(screen.getByText("Español")).toBeInTheDocument();
        expect(screen.getByText("Deutsch")).toBeInTheDocument();
    });

    it("calls changeLanguage with correct code on click", () => {
        const { router } = require("@inertiajs/react");
        render(<DropdownMenu />);
        fireEvent.click(screen.getByRole("button", { name: /language/i }));
        const spanishButton = screen.getByText("Español");
        fireEvent.click(spanishButton);
        expect(router.visit).toHaveBeenCalledWith("/change-language/es", {
            only: ["translations"],
        });
    });
});
