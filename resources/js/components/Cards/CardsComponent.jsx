import React from "react";
import "./CardsComponent.css";
import { ArrowIcon } from "../styles/Icons.styled";
import { Link } from "@inertiajs/react";
import { FaClock } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";

const CardComponent = ({ image, title, time, date, description }) => {
    return (
        <>
            <div className="cards__container">
                <div className="cards__image-container">
                    <img src={image} alt={title} />
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
                            <h3>{time}</h3>
                        </div>
                        <div className="cards__info-date">
                            <FaCalendarDays />
                            <h3>{date}</h3>
                        </div>
                    </div>
                </IconContext.Provider>

                <div className="cards__event-description">{description}</div>
                <Link href={route("details")}>
                    <button className="cards__btn">
                        View Details <ArrowIcon />
                    </button>
                </Link>
            </div>
        </>
    );
};

export default CardComponent;
