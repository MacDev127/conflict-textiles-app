import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
    it("renders without crashing", () => {
        render(<Footer />);
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
    });

    it("lists quick links", () => {
        render(<Footer />);
        // Use getAllByText to handle multiple instances of the same text
        const aboutLinks = screen.getAllByText("About");
        expect(aboutLinks.length).toBeGreaterThan(0); // Ensure there's at least one 'About' link
        aboutLinks.forEach((link) => expect(link).toBeInTheDocument());
    });

    it("displays copyright information", () => {
        render(<Footer />);
        expect(
            screen.getByText(
                /Conflict Textiles Trust 2024 | CAIN Associated Site/
            )
        ).toBeInTheDocument();
    });
});
