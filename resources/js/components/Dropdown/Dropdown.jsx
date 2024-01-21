import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import "./Dropdown.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FaAngleDown } from "react-icons/fa";

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
    ];

    const changeLanguage = (code) => {
        // Here we use Inertia's visit method to make a GET request to the server
        Inertia.visit(`/change-language/${code}`, { preserveState: false });
        setIsOpen(false); // Close the dropdown
    };

    return (
        <div className="dropdown">
            <button className="dropdown_btn" onClick={toggleDropdown}>
                Lang
                <FaAngleDown className={`icon ${isOpen ? "open" : ""}`} />
            </button>

            {isOpen && (
                <ul className="dropdown-content">
                    {languages.map(({ code, name, country_code }) => (
                        <li key={country_code}>
                            <button
                                className="lang_btn"
                                onClick={() => changeLanguage(code)}
                            >
                                <span
                                    className={`flag-icon flag-icon-${country_code.toLowerCase()}`}
                                ></span>
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
