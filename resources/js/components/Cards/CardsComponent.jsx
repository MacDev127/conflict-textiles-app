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
    event_time,
    location,
    type,
    event_date,
    id,
}) => {
    const formattedDate = new Date(event_date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
    const formattedTime = new Date(
        "1970-01-01T" + event_time
    ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return (
        <>
            <div className="cards__container">
                <div className="cards__image-container">
                    <img src={image} alt="" />
                </div>
                <IconContext.Provider
                    value={{
                        color: "#df0144",
                        size: "15px",
                    }}
                >
                    <div className="cards__flag">
                        <span className="cards__flag-date">
                            <span className="cards__flag-icon">
                                <FaCalendarDays />
                            </span>
                            {formattedDate}
                        </span>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider
                    value={{
                        color: "#df0144",
                        size: "14px",
                    }}
                >
                    <div className="cards__info">
                        <div className="cards__event-description">
                            <div className="cards__event-title">
                                <h2>{title}</h2>
                            </div>

                            {type}
                        </div>
                        <div className="cards__info-time">
                            <FaLocationDot />
                            <h3>{location}</h3>
                        </div>
                        <div className="cards__info-date">
                            <FaClock />
                            <h3>{formattedTime}</h3>
                        </div>
                        <div className="cards__btn-wrapper">
                            <Link href={route("events.show", { id })}>
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
