import React from "react";
import "./CardsComponent.css";
import { Link } from "@inertiajs/react";
import { FaClock } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import { IconContext } from "react-icons";

const CardComponent = ({
    image,
    title,
    // event_time,
    location,
    event_date,
    description,
}) => {
    return (
        <>
            <div className="cards__container">
                <div className="cards__image-container">
                    <img src={image} />
                </div>
                <div className="cards__flag">
                    <span className="cards__flag-date">01</span>
                    <span className="cards__flag-month-year">May 2024</span>
                </div>

                <IconContext.Provider
                    value={{
                        color: "#313131",
                        size: "14px",
                    }}
                >
                    <div className="cards__info">
                        <div className="cards__event-title">
                            <h2>{title}</h2>
                        </div>

                        <div className="cards__event-description">
                            <p>{description}</p>
                        </div>
                        <div className="cards__info-time">
                            <FaLocationDot />
                            <h3>{location}</h3>
                        </div>
                        <div className="cards__info-date">
                            <FaCalendarDays />
                            <h3>{event_date}</h3>
                        </div>
                        <div className="cards__btn-wrapper">
                            <Link href={route("details")}>
                                <button className="cards__btn">Details</button>
                            </Link>
                        </div>
                    </div>
                </IconContext.Provider>
            </div>
        </>
    );
};

export default CardComponent;
