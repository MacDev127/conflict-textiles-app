import { Link } from "@inertiajs/react";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IconContext } from "react-icons";

import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-wrapper">
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
                                <a href="#">Loyalty Cards</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
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
                    <div className="news-letter">
                        <div className="subscribe">
                            <h2 className="subscribe-title">
                                Conflict Textiles
                            </h2>
                            <p className="subscribe-copy">
                                Subscribe to keep up with upcoming events and
                                workshops.
                            </p>
                            <div className="form">
                                <input
                                    type="email"
                                    className="form-email"
                                    placeholder="Enter your email address"
                                />
                                <button className="form-button">Send</button>
                            </div>
                            <div className="notice">
                                <input type="checkbox" />
                                <span className="notice-copy">
                                    I agree to my email address being stored and
                                    uses to recieve monthly newsletter.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="socials">
                    <IconContext.Provider
                        value={{
                            color: "blue",
                            size: "20px",
                            margin: "auto",
                            zIndex: "1",
                        }}
                    >
                        <Link className="social-icon" to="https://twitter.com/">
                            <FaTwitter />
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
