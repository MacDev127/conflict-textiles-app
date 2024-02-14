import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "@inertiajs/react";

import "./Navbar.css";
import LoginButton from "@/components/LoginButton/LoginButton";
import DropdownMenu from "../Dropdown/Dropdown";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <Link href={route("home")}>
                <div className="nav-logo">
                    <img src="/images/misc/logo2.png" alt="Logo" />
                </div>
            </Link>
            <nav className={menuOpen ? "open active" : ""}>
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
                    <li className="nav_list">
                        <Link className="nav_link" href={route("home")}>
                            Home
                        </Link>
                    </li>
                    <li className="nav_list">
                        <Link className="nav_link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav_list">
                        <Link className="nav_link" to="/search">
                            Search
                        </Link>
                    </li>
                    <li className="nav_list">
                        <Link className="nav_link" href={route("collection")}>
                            Collection
                        </Link>
                    </li>

                    <li className="nav_list">
                        <Link className="nav_link" to="/events">
                            Events
                        </Link>
                    </li>
                    <li className="nav_list">
                        <Link className="nav_link" to="/links">
                            Links
                        </Link>
                    </li>
                    <li className="nav_list">
                        <Link className="nav_link" to="/contact">
                            Contact
                            {/* {t("navbar_contact")} */}
                        </Link>
                    </li>
                    <li className="nav_icon" to="/contact">
                        <Link href="/login" className="login_link">
                            <FaCircleUser />
                            <p>Log In</p>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="right-section">
                <DropdownMenu />
                <Link href="/login">
                    <LoginButton className="nav_log">Log In</LoginButton>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
