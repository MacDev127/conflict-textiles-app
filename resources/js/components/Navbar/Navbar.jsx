import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link, usePage } from "@inertiajs/react";
import "./Navbar.css";
import DropdownMenu from "../Dropdown/Dropdown";
import { FaUser } from "react-icons/fa";
import MenuComponent from "../Menu/MenuComponent";

const Navbar = ({ authUser, auth, translations }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage();
    const [activeLink, setActiveLink] = useState(url);

    useEffect(() => {
        setActiveLink(url);
    }, [url]);

    let navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/collection", label: "Collection" },
        { path: "/events", label: "Events" },
        { path: "/contact", label: "Contact" },
        { path: "/links", label: "Resources" },
    ];

    if (auth && auth.user && auth.user.role_id === 3) {
        navItems.push({ path: "/bookmarks", label: "Bookmarks" });
    }

    return (
        <header>
            <div className="nav-logo">
                <Link href="/">
                    <img src="/images/misc/logo2.png" alt="Logo" />
                </Link>
            </div>
            <div id="navbar" className={menuOpen ? "open active" : ""}>
                <button
                    aria-label="Toggle Menu"
                    className="menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <BiX className="close-icon" />
                    ) : (
                        <BiMenu className="menu-icon" />
                    )}
                </button>
                <ul>
                    {navItems.map((item) => (
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
                            {authUser?.name || "Login"}
                            <FaUser style={{ fontSize: "20px" }} />
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
