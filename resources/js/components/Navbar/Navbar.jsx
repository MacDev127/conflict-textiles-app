import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link, usePage } from "@inertiajs/react";
import "./Navbar.css";
import DropdownMenu from "../Dropdown/Dropdown";
import { FaUser } from "react-icons/fa";
import MenuComponent from "../Menu/MenuComponent";

const Navbar = ({ authUser, auth }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage();
    const [activeLink, setActiveLink] = useState(url);

    useEffect(() => {
        setActiveLink(url);
    }, [url]);

    let menuItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/collection", label: "Collections" },
        { path: "/events", label: "Events" },
        { path: "/contact", label: "Contact" },
    ];

    if (auth && auth.user && auth.user.role_id === 3) {
        menuItems.push({ path: "/bookmarks", label: "Bookmarks" });
    }

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
                    {menuItems.map((item) => (
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
