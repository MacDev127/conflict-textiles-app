import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlertComponent from "../Alert/AlertComponent"; // Adjust the import path as necessary

describe("AlertComponent Tests", () => {
    const closeHandler = jest.fn(); // Mock function to test close functionality

    it("renders without crashing", () => {
        render(
            <AlertComponent
                severity="error"
                closeHandler={closeHandler}
                className="custom-alert"
                variant="filled"
            >
                This is a test alert
            </AlertComponent>
        );
        expect(screen.getByText("This is a test alert")).toBeInTheDocument();
    });

    it("applies given className and severity", () => {
        render(
            <AlertComponent
                severity="warning"
                closeHandler={closeHandler}
                className="custom-alert"
                variant="outlined"
            >
                Warning alert
            </AlertComponent>
        );
        // Now checking the class on the parent element of the text, which should be the Alert
        const alert = screen
            .getByText("Warning alert")
            .closest(".MuiAlert-root");
        expect(alert).toHaveClass("custom-alert");
        expect(alert).toHaveClass("MuiAlert-outlinedWarning");
    });

    it("closes when close handler is triggered", () => {
        render(
            <AlertComponent
                severity="info"
                closeHandler={closeHandler}
                className="custom-alert"
                variant="filled"
            >
                Info alert
            </AlertComponent>
        );
        const closeButton = screen.getByRole("button", { name: /close/i });
        fireEvent.click(closeButton);
        expect(closeHandler).toHaveBeenCalled();
    });
});
