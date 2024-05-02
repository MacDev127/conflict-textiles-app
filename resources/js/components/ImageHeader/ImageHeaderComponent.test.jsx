import React from "react";
import { render, screen } from "@testing-library/react";
import ImageHeaderComponent from "./ImageHeaderComponent";
import "@testing-library/jest-dom";

describe("ImageHeaderComponent", () => {
    const imageUrl = "test-image.jpg";
    const quoteText = "This is a test quote.";

    it("renders without crashing", () => {
        render(
            <ImageHeaderComponent imageUrl={imageUrl} quoteText={quoteText} />
        );
        const image = screen.getByAltText(""); // Use getByAltText with an empty string
        expect(image).toHaveAttribute("src", imageUrl);
    });

    it("applies given className", () => {
        const className = "custom-class";
        render(
            <ImageHeaderComponent
                className={className}
                imageUrl={imageUrl}
                quoteText={quoteText}
            />
        );
        const component = screen.getByAltText("").parentNode; // Parent node to access the styled div
        expect(component).toHaveClass(className);
    });

    it("displays the quote text correctly", () => {
        render(
            <ImageHeaderComponent imageUrl={imageUrl} quoteText={quoteText} />
        );
        const quote = screen.getByText(quoteText);
        expect(quote.tagName).toBe("Q");
        expect(quote).toHaveClass(
            "imageHeader__text animate__animated animate__fadeIn"
        );
    });

    it("passes additional props to the ImageHeaderStyle component", () => {
        const style = { backgroundColor: "blue" };
        render(
            <ImageHeaderComponent
                style={style}
                imageUrl={imageUrl}
                quoteText={quoteText}
            />
        );
        const component = screen.getByAltText("").parentNode; // Parent node to access the styled div
        expect(component).toHaveStyle("background-color: blue");
    });

    it("includes animate.css classes for animation", () => {
        render(
            <ImageHeaderComponent imageUrl={imageUrl} quoteText={quoteText} />
        );
        const quote = screen.getByText(quoteText);
        expect(quote).toHaveClass("animate__animated animate__fadeIn");
    });
});
