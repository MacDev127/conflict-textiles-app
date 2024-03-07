import React, { useState, useEffect } from "react";
import "./SearchComponent.css";
import { router } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { FaAngleDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

// Access the current page's properties using the usePage hook from Inertia.js
const SearchComponent = ({ countries }) => {
    const { url } = usePage();

    // Initialize form data with useForm hook from Inertia.js, setting default values for each field
    const { data, setData, get } = useForm({
        type: "",
        maker: "",
        keyword: "",
        date_start: "",
        date_end: "",
        country_of_origin: "",
    });

    // Event handler for handling changes in any of the form's input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructure 'name' and 'value' from the event's target (the input element)
        setData(name, value); // Update the form's state for the changed input field using setData method
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission action (page reload)
        get(route("gallery_images.search")); // Submit the form data using a GET request to the 'gallery_images.search'  controller route
    };

    //--------------------------------Advanaced Search----------------------------------------------//
    const [showAdvanced, setShowAdvanced] = useState(false);

    //closing animation
    const [isClosing, setIsClosing] = useState(false);

    const toggleAdvancedSearch = () => {
        setIsClosing(!showAdvanced); // Toggle the isClosing state
        setShowAdvanced(!showAdvanced); // Toggle the visibility of the advanced search
    };

    const handleTransitionEnd = () => {
        if (!showAdvanced) {
            setIsClosing(false); // Reset the closing state after the transition finishes
        }
    };

    //--------------------------------------Advanaced Search-----------------------------------//

    return (
        <div className="search-container">
            <div className="search-bar">
                <div className="search-bar__title">
                    <p>Search Collection</p>
                </div>

                <form onSubmit={handleSubmit} className="search-form">
                    {/* Keyword search input */}
                    <input
                        type="text"
                        name="keyword"
                        value={data.keyword}
                        onChange={handleInputChange}
                        placeholder="Search the collection by keyword..."
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        Search
                        <GoSearch style={{ fontSize: "18px" }} />
                    </button>
                </form>
                <div className="advanced__btn-wrapper">
                    <button
                        onClick={toggleAdvancedSearch}
                        className="advanced__btn"
                    >
                        Advanced
                        <FaAngleDown
                            className={`icon ${showAdvanced ? "true" : ""}`}
                        />
                    </button>
                </div>
                <div
                    className={`advanced__search-container ${
                        showAdvanced ? "open" : ""
                    } ${isClosing ? "closing" : ""}`}
                    onTransitionEnd={handleTransitionEnd}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="advanced__search-form"
                    >
                        <div className="advanced__search-form__group1">
                            <div className="advanced__search-form__group1-container">
                                <label htmlFor="type">Type</label>

                                <input
                                    type="text"
                                    name="type"
                                    value={data.type}
                                    onChange={handleInputChange}
                                    placeholder="Arpillera, Quilt, Banner etc..."
                                    className="advanced__input"
                                />
                            </div>

                            <div className="advanced__search-form__group1-container">
                                <label htmlFor="maker">Maker</label>

                                <input
                                    type="text"
                                    name="maker"
                                    value={data.maker}
                                    onChange={handleInputChange}
                                    placeholder="Name of Maker..."
                                    className="advanced__input"
                                />
                            </div>
                            <div className="advanced__search-form__group1-container">
                                <label htmlFor="country_of_origin">
                                    Country of Origin
                                </label>

                                <select
                                    name="country_of_origin"
                                    value={data.country_of_origin}
                                    onChange={handleInputChange}
                                    className="advanced__input"
                                >
                                    <option value="">Select</option>
                                    {countries &&
                                        countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        <div className="advanced__search-form__group2">
                            <div className="advanced__search-form__date-container">
                                <label htmlFor="date_start">
                                    Date From (Year)
                                </label>
                                <input
                                    type="number"
                                    name="date_start"
                                    value={data.date_start}
                                    onChange={handleInputChange}
                                    placeholder="Year Start"
                                    className="advanced__input-date"
                                    min="1900" // Adjust according to your data
                                    max={new Date().getFullYear()} // Current year as the max value
                                />
                            </div>
                            <div className="advanced__search-form__date-container">
                                <label htmlFor="date_end">Date To (Year)</label>
                                <input
                                    type="number"
                                    name="date_end"
                                    value={data.date_end}
                                    onChange={handleInputChange}
                                    placeholder="Year End"
                                    className="advanced__input-date"
                                    min="1900" // Adjust according to your data
                                    max={new Date().getFullYear()} // Current year as the max value
                                />
                            </div>
                        </div>
                    </form>

                    {/* You can add more advanced search fields here */}
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
