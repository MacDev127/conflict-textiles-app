import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensure this is properly imported.
import CardComponent from "../Cards/CardsComponent"; // Adjust the import path as necessary.

// Mock functions

describe("CardComponent", () => {
    it("renders correctly with provided props", () => {
        const props = {
            image: "url-to-image",
            title: "Event Title",
            event_time: "12:00",
            location: "Event Location",
            type: "Event Type",
            event_date: "2023-04-01",
            id: 1,
        };

        render(<CardComponent {...props} />);
        // Assertions here to verify rendering
        expect(screen.getByText("Event Title")).toBeInTheDocument();
        expect(screen.getByText("Event Location")).toBeInTheDocument();
        // Ensure the link is correctly set
        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            "/events/show/1"
        );
    });
});
