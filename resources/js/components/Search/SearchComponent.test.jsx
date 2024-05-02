import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchComponent from "./SearchComponent"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe("SearchComponent", () => {
    const mockCountries = ["Country1", "Country2"];
    const mockTypes = ["Type1", "Type2"];
    const mockAuth = { user: { role_id: 3 } }; // Assuming role_id 3 can access advanced search

    it("renders without crashing", () => {
        render(
            <SearchComponent
                countries={mockCountries}
                type={mockTypes}
                auth={mockAuth}
            />
        );
        expect(
            screen.getByPlaceholderText("Search the collection by keyword...")
        ).toBeInTheDocument();
    });

    it("allows input in the keyword search field", () => {
        render(
            <SearchComponent
                countries={mockCountries}
                type={mockTypes}
                auth={mockAuth}
            />
        );
        const input = screen.getByPlaceholderText(
            "Search the collection by keyword..."
        );
        fireEvent.change(input, { target: { value: "test" } });
        expect(input.value).toBe("test");
    });

    it("displays advanced search when authorized", () => {
        render(
            <SearchComponent
                countries={mockCountries}
                type={mockTypes}
                auth={mockAuth}
            />
        );
        const button = screen.getByText("Advanced");
        fireEvent.click(button);
        expect(screen.getByText("Type")).toBeInTheDocument(); // Checks if 'Type' label is now visible
    });
});
