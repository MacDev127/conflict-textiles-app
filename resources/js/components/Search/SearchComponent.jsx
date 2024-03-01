import React, { useState, useEffect } from "react";
import "./SearchComponent.css";
import { router } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { FaAngleDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const SearchComponent = () => {
    const { url } = usePage();

    const { data, setData, get } = useForm({
        type: "",
        maker: "",
        keyword: "",
        date_start: "",
        date_end: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        get(route("gallery_images.search"));
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

    // Effect hook to reset the closing state when `showAdvanced` becomes true
    // useEffect(() => {
    //     if (showAdvanced) {
    //         setIsClosing(false);
    //     }
    // }, [showAdvanced]);

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
                                <div>
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

                                <div>
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
                            </div>

                            <div className="advanced__search-form__group2">
                                <input
                                    type="date"
                                    name="date_start"
                                    value={data.date_start}
                                    onChange={handleInputChange}
                                    placeholder="Date Start"
                                />
                                <input
                                    type="date"
                                    name="date_end"
                                    value={data.date_end}
                                    onChange={handleInputChange}
                                    placeholder="Date End"
                                />
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
