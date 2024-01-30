import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "@inertiajs/react";

import "./Navbar.css";
import ButtonComponent from "@/components/Button/ButtonComponent";
import LoginButton from "@/components/LoginButton/LoginButton";
import DropdownMenu from "../Dropdown/Dropdown";
import { PiSignInBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
    // const { t } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <Link href={route("home")}>
                <div className="nav-logo">
                    <img src="/images/logo2.png" alt="Logo" />
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
                        <Link className="nav_link" to="/textiles">
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
                        <Link className="login_link">
                            <p>Account</p>
                            <FaUser />
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="right-section">
                <DropdownMenu />
                <Link to="/login">
                    <LoginButton className="nav_log">Account</LoginButton>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
