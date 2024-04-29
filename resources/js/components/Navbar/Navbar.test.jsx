import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar/Navbar"; // Adjust the import path as necessary

jest.mock("@inertiajs/react", () => ({
    usePage: () => ({
        props: { auth: { user: null } }, // Mock auth user data
    }),
    InertiaLink: () => <a></a>, // Mock InertiaLink if used in Navbar
}));

describe("Navbar", () => {
    it("renders correctly", () => {
        render(<Navbar />);
        const logo = screen.getByAltText("Logo");
        expect(logo).toBeInTheDocument();
        const menuIcon = screen.getByText("☰");
        expect(menuIcon).toBeInTheDocument();
        expect(screen.getByTestId("navbar")).not.toHaveClass("open active");
    });

    it("toggles menu open/close when menu icon is clicked", () => {
        render(<Navbar />);
        const menuIcon = screen.getByText("☰");
        fireEvent.click(menuIcon);
        expect(screen.getByText("Home")).toBeInTheDocument();
        fireEvent.click(menuIcon);
        expect(screen.queryByText("Home")).not.toBeInTheDocument();
    });
});
