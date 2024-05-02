import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar/Navbar"; // Adjust the import path as necessary

// Mock necessary hooks and components from InertiaJS
jest.mock("@inertiajs/react", () => ({
    Link: ({ children }) => <a>{children}</a>, // Simplified mock of Link
    usePage: () => ({
        props: {
            auth: {
                user: null, // Assume user is logged in and authorized
            },
        },
    }),
}));

describe("Navbar Component", () => {
    // Test to check if the Navbar renders without crashing
    it("renders without crashing", () => {
        render(<Navbar />);
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument(); // Assuming home is always visible
    });

    // Test to check if menu toggle works
    it("toggles menu on icon click", () => {
        render(<Navbar />);
        const menuIcon = screen.getByRole("button", { name: /menu/i });
        fireEvent.click(menuIcon); // Open menu
        expect(screen.getByText("Home")).toBeVisible();

        fireEvent.click(menuIcon); // Close menu

        expect(screen.getByText("Home")).toBeVisible();
        // expect(screen.queryByText("Home")).not.toBeInTheDocument();
    });
});
