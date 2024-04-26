import React, { useState } from "react";
import "./Dropdown.css";
// import { FaAngleDown } from "react-icons/fa";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { router } from "@inertiajs/react";
import { GrLanguage } from "react-icons/gr";

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const languages = [
        {
            code: "en",
            name: "English",
            country_code: "gb",
        },
        {
            code: "es",
            name: "Español",
            country_code: "es",
        },
        {
            code: "de",
            name: "Deutsch",
            country_code: "de",
        },
    ];

    const changeLanguage = (code) => {
        router.visit(`/change-language/${code}`, { only: ["translations"] });
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button
                aria-label="Language"
                className="dropdown_btn"
                onClick={toggleDropdown}
            >
                <GrLanguage
                    style={{ fontSize: "22px", color: "#3a3335" }}
                    className={`icon ${isOpen ? "open" : ""}`}
                />
            </button>

            {isOpen && (
                <ul className="dropdown-content">
                    {languages.map(({ code, name, country_code }) => (
                        <li key={country_code}>
                            <button
                                aria-label="Language"
                                className="lang_btn"
                                onClick={() => changeLanguage(code)}
                            >
                                {name}
                                <span
                                    style={{ marginLeft: "6px" }}
                                    className={`fi fi-${country_code.toLowerCase()}`}
                                ></span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
