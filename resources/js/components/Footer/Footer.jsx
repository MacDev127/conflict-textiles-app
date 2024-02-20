import { Link } from "@inertiajs/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IconContext } from "react-icons";

import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-wrapper">
                    <div className="news-letter">
                        <div className="subscribe">
                            <h2 className="subscribe-title">
                                Conflict Textiles
                            </h2>
                            <img src="/images/misc/logo2.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="foot-list">
                        <ul>
                            <li className="foot-title">Links</li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Search</a>
                            </li>
                            <li>
                                <a href="#">Textiles</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Links</a>
                            </li>
                        </ul>
                    </div>

                    <div className="foot-list">
                        <ul>
                            <li className="foot-title">About Us</li>
                            <li>
                                <a href="#">About Us</a>
                            </li>

                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Policy</a>
                            </li>
                            <li>
                                <a href="#">Policy</a>
                            </li>
                            <li>
                                <a href="#">Locations</a>
                            </li>
                        </ul>
                    </div>
                    <div className="foot-list">
                        <ul>
                            <li className="foot-title">Help</li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Cookie Policy</a>
                            </li>
                            <li>
                                <a href="#">Accessibility</a>
                            </li>
                            <li>
                                <a href="#">My Account</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="socials">
                    <IconContext.Provider
                        value={{
                            color: "white",
                            size: "24px",
                            margin: "auto",
                            zIndex: "1",
                        }}
                    >
                        <Link className="social-icon" to="https://twitter.com/">
                            <FaXTwitter />
                        </Link>
                        <Link className="social-icon" to="https://youtube.com/">
                            <FaYoutube />
                        </Link>

                        <Link className="social-icon" to="https://youtube.com/">
                            <FaFacebookF />
                        </Link>
                    </IconContext.Provider>
                </div>
                <p className="copy">
                    &copy; Conflict Textiles Trust 2023 | CAIN Associated Site
                </p>

                {/* test */}
            </footer>
        </>
    );
};

export default Footer;
