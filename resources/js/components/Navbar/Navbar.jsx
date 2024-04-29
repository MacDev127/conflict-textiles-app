import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link, usePage } from "@inertiajs/react";
import "./Navbar.css";
import DropdownMenu from "../Dropdown/Dropdown";
import { FaUser } from "react-icons/fa";
import MenuComponent from "../Menu/MenuComponent";

const Navbar = ({ authUser }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage(); // Use usePage to get the current URL from InertiaJS

    // Automatically update the active link based on URL changes
    const [activeLink, setActiveLink] = useState(url); // Initialize with current URL

    // Update active link when URL changes
    useEffect(() => {
        setActiveLink(url);
    }, [url]);

    return (
        <header>
            <div className="nav-logo">
                <Link href="/">
                    <img src="/images/misc/logo2.png" alt="Logo" />
                </Link>
            </div>
            <div id="navbar" className={menuOpen ? "open active" : ""}>
                <div
                    className="menu"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                >
                    {menuOpen ? (
                        <BiX className="close-icon" />
                    ) : (
                        <BiMenu className="menu-icon" />
                    )}
                </div>
                <ul>
                    {[
                        { path: "/", label: "Home" },
                        { path: "/about", label: "About" },
                        { path: "/collection", label: "Collections" },
                        { path: "/events", label: "Events" },
                        { path: "/links", label: "Links" },
                        { path: "/contact", label: "Contact" },
                    ].map((item) => (
                        <li className="nav_list" key={item.path}>
                            <Link
                                className={`nav_link ${
                                    activeLink === item.path ? "active" : ""
                                }`}
                                href={item.path}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="nav_icon">
                        <Link href="/login" className="login_link">
                            <FaUser style={{ fontSize: "20px" }} />{" "}
                            {authUser?.name || "Log In"}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="right-section">
                <DropdownMenu />
                <MenuComponent authUser={authUser} />
            </div>
        </header>
    );
};

export default Navbar;
