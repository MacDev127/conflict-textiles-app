import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardComponent from "../Cards/CardsComponent";

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
        expect(screen.getByText("Event Title")).toBeInTheDocument();
        expect(screen.getByText("Event Location")).toBeInTheDocument();
        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            "/events/show/1"
        );
    });
});
