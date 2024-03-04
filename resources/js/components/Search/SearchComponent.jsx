import React, { useState, useEffect } from "react";
import "./SearchComponent.css";
import { router } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { FaAngleDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

// Access the current page's properties using the usePage hook from Inertia.js
const SearchComponent = () => {
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
        if (showAdvanced) {
            // Begin the closing animation
            setIsClosing(true);

            // Wait for the animation to finish before hiding the content
            setTimeout(() => {
                setShowAdvanced(false);
                setIsClosing(false); // Reset the closing state
            }, 500); // This timeout should match the duration of your CSS animation
        } else {
            setShowAdvanced(true);
        }
    };

    //--------------------------------------Advanaced Search-----------------------------------//

    return (
        <>
            <div className="search-bar">
                <div className="search-bar__title">
                    <p>Explore Collection</p>
                </div>

                <form onSubmit={handleSubmit} className="search-form">
                    {/* Keyword search input */}
                    <input
                        type="text"
                        name="keyword"
                        value={data.keyword}
                        onChange={handleInputChange}
                        placeholder="Search the collection..."
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        Search
                        <GoSearch style={{ fontSize: "18px" }} />
                    </button>
                </form>
                <div className="advanced__btn-wrapper">
                    <a onClick={toggleAdvancedSearch} className="advanced__btn">
                        Advanced
                        <FaAngleDown
                            className={`icon ${showAdvanced ? "true" : ""}`}
                        />
                    </a>
                </div>
            </div>
            <div className="advanced__search">
                {showAdvanced && (
                    <div
                        className={`advanced__search-container ${
                            showAdvanced ? "open" : ""
                        } ${isClosing ? "closing" : ""}`}
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
                                        placeholder="Type"
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
                                        placeholder="Maker"
                                        className="advanced__input"
                                    />
                                </div>
                                <div className="advanced__search-form__group1-container">
                                    <label htmlFor="country_of_origin">
                                        Country of Origin
                                    </label>

                                    <input
                                        type="text"
                                        name="country_of_origin"
                                        value={data.country_of_origin}
                                        onChange={handleInputChange}
                                        placeholder="Country of origin"
                                        className="advanced__input"
                                    />
                                </div>
                            </div>

                            <div className="advanced__search-form__group2">
                                <div className="advanced__search-form__group2-container">
                                    <label htmlFor="date">Date From</label>
                                    <input
                                        type="date"
                                        name="date_start"
                                        value={data.date_start}
                                        onChange={handleInputChange}
                                        placeholder="Date Start"
                                        className="advanced__input-date"
                                    />
                                </div>
                                <div className="advanced__search-form__group2-container">
                                    <label htmlFor="date">Date To</label>

                                    <input
                                        type="date"
                                        name="date_end"
                                        value={data.date_end}
                                        onChange={handleInputChange}
                                        placeholder="Date End"
                                        className="advanced__input-date"
                                    />
                                </div>
                            </div>
                        </form>

                        {/* You can add more advanced search fields here */}
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchComponent;
