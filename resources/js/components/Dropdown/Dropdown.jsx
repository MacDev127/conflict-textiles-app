import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import "./Dropdown.css";
import { FaAngleDown } from "react-icons/fa";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
        // Here we use Inertia's visit method to make a GET request to the server
        Inertia.visit(`/change-language/${code}`, { preserveState: false });
        setIsOpen(false);
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
                                {name}
                                <span
                                    style={{ marginLeft: "6px" }}
                                    class={`fi fi-${country_code.toLowerCase()}`}
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
