import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BreadcrumbComponent from "../Breadcrumbs/BreadcrumbComponent";
import { router } from "@inertiajs/react";

jest.mock("@inertiajs/react", () => ({
    ...jest.requireActual("@inertiajs/react"), // Preserves other exports
    router: {
        visit: jest.fn(), // Mocks the visit function
    },
}));

describe("BreadcrumbComponent Tests", () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    it("renders breadcrumbs correctly and handles navigation", () => {
        render(<BreadcrumbComponent breadcrumbs={breadcrumbs} />);

        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(breadcrumbs.length);
        expect(links[0]).toHaveTextContent("Home");

        // Simulate click
        fireEvent.click(links[0]);
        // Expect the mock function to have been called with the first breadcrumb href
        expect(router.visit).toHaveBeenCalledWith("/");
    });
});
