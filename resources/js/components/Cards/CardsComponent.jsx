import React from "react";
import "./CardsComponent.css";
import { ArrowIcon } from "../styles/Icons.styled";
import { Link } from "@inertiajs/react";
import { FaClock } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { IconContext } from "react-icons";

const CardComponent = ({
    image,
    title,
    event_time,
    event_date,
    description,
}) => {
    return (
        <div className="cards__container">
            <div className="cards__image-container">
                <img src={image} />
            </div>
            <div className="cards__event-title">
                <h2>{title}</h2>
            </div>
            <IconContext.Provider
                value={{
                    color: "dc143c",
                    size: "14px",
                }}
            >
                <div className="cards__info">
                    <div className="cards__info-time">
                        <FaClock />
                        <h3>{event_time}</h3>
                    </div>
                    <div className="cards__info-date">
                        <FaCalendarDays />
                        <h3>{event_date}</h3>
                    </div>
                </div>
            </IconContext.Provider>

            <div className="cards__event-description">
                {description}
                <Link href={route("details")}>
                    <button className="cards__btn">
                        View Details <ArrowIcon />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CardComponent;
