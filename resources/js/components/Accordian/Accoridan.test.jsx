import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react"; // Include waitFor here
import "@testing-library/jest-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

import Accordian from "../Accordian/Accordian"; // Adjust path as necessary

describe("Accordion Component Tests", () => {
    const mockTextileDetail = {
        id: "1",
        description: "This is a test description for the accordion panel.",
    };

    const props = {
        transitioncomponent: Fade,
        transitionprops: { timeout: 500 },
        textileDetail: mockTextileDetail,
    };

    test("renders Accordion component with default state", () => {
        render(<Accordian {...props} />);
        expect(screen.getByText("Description")).toBeInTheDocument();
    });
    test("expands and collapses accordion panels when clicked", async () => {
        render(<Accordian {...props} />);
        const descriptionHeader = screen.getByRole("button", {
            name: /description/i,
        });

        // First click, expand
        fireEvent.click(descriptionHeader);
        expect(descriptionHeader).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByText(mockTextileDetail.description)).toBeVisible();

        // Second click, collapse
        fireEvent.click(descriptionHeader);

        // Use waitFor to wait until the element is not visible
        await waitFor(() => {
            expect(
                screen.queryByText(mockTextileDetail.description)
            ).not.toBeVisible();
        });
    });

    test("handles transitions correctly", () => {
        render(<Accordian {...props} />);
        fireEvent.click(screen.getByText("Publications"));
        expect(
            screen.getByText(
                "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."
            )
        ).toBeInTheDocument();
    });
});
