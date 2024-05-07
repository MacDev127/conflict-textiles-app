import React from "react";

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
                <div className="footer__container">
                    <div className="footer__widget">
                        <div>
                            <Link href="/">
                                <img
                                    src="/images/misc/footer-logo.png"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div>
                            <p className="footer__widget_desc">
                                Conflict Textiles is home to a large collection
                                of international textiles, exhibitions and
                                associated events, all of which focus on
                                elements of conflict and human rights abuses
                            </p>
                        </div>

                        <div className="footer__widget-socials">
                            <IconContext.Provider
                                value={{
                                    color: "#bbbbbb",
                                    size: "24px",
                                    margin: "auto",
                                    zIndex: "1",
                                }}
                            >
                                <a
                                    className="social-icon"
                                    href="https://twitter.com/conflicttextil1"
                                >
                                    <FaXTwitter />
                                </a>
                                <a
                                    className="social-icon"
                                    href="https://www.youtube.com/@CAINWebService"
                                >
                                    <FaYoutube />
                                </a>

                                <a
                                    className="social-icon"
                                    href="https://youtube.com/"
                                >
                                    <FaFacebookF />
                                </a>
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div className="footer__links">
                        <ul>
                            <li className="footer__links-title">Quick Links</li>
                            <li>
                                <a href="#">About</a>
                            </li>

                            <li>
                                <a href="#">Collection</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="/links">Links</a>
                            </li>

                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__links">
                        <ul>
                            <li className="footer__links-title">About</li>

                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Research</a>
                            </li>
                            <li>
                                <a href="#">International Work</a>
                            </li>
                            <li>
                                <a href="#">Volunteer</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__links">
                        <ul>
                            <li className="footer__links-title">Help</li>
                            <li>
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/disclaimer">Disclaimer</a>
                            </li>
                            <li>
                                <a href="/cookies">Cookie Policy</a>
                            </li>
                            <li>
                                <a href="/accessibility">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copy">
                    <p className="copy">
                        &copy; Conflict Textiles Trust 2024 | CAIN Associated
                        Site
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
