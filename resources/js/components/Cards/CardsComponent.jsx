import React from "react";
import "./CardsComponent.css";
import { ArrowIcon } from "../styles/Icons.styled";
import { Link } from "@inertiajs/react";
import { FaClock } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { IconContext } from "react-icons";

const CardComponent = () => {
    return (
        <>
            <div className="cards__container">
                <div className="cards__image-container">
                    <img src="/images/about.jpg" alt="" />
                </div>
                <div className="cards__event-title">
                    <h2>Connecting Ties Exhibition </h2>
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
                            <h3>10:00am-5.00pm</h3>
                        </div>
                        <div className="cards__info-date">
                            <FaCalendarDays />
                            <h3>25 Feb - 20 March, 2024</h3>
                        </div>
                    </div>
                </IconContext.Provider>

                <div className="cards__event-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque optio enim neque magnam aliquam porro dolorem
                    incidunt adipisci reprehenderit suscipit quia dolorum
                    perspiciatis eaque repudiandae, esse quas ullam! Nostrum,
                    ducimus?
                </div>
                <Link href={route("details")}>
                    <button className="cards__btn">
                        View Details <ArrowIcon />
                    </button>
                </Link>
            </div>
            <div className="cards__container">
                <div className="cards__image-container">
                    <img src="/images/event2.jpg" alt="" />
                </div>
                <div className="cards__info">
                    <h3 className="cards__event-type"> Workshop</h3>
                    <h4 className="cards__event-date">2 March, 2024</h4>
                </div>
                <div className="cards__event-title">
                    <h2>Workhouse Stories</h2>
                </div>
                <div className="cards__event-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque optio enim neque magnam aliquam porro dolorem
                    incidunt adipisci reprehenderit suscipit quia dolorum
                    perspiciatis eaque repudiandae, esse quas ullam! Nostrum,
                    ducimus?
                </div>
                <button className="cards__btn">
                    View Details <ArrowIcon />
                </button>
            </div>
            <div className="cards__container">
                <div className="cards__image-container">
                    <img src="/images/event1.jpg" alt="" />
                </div>
                <div className="cards__info">
                    <h3 className="cards__event-type"> Exhibition</h3>
                    <h4 className="cards__event-date">
                        3 April - 17 April, 2024
                    </h4>
                </div>
                <div className="cards__event-title">
                    <h2> Arpilleras Poéticas </h2>
                </div>

                <div className="cards__event-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque optio enim neque magnam aliquam porro dolorem
                    incidunt adipisci reprehenderit suscipit quia dolorum
                    perspiciatis eaque repudiandae, esse quas ullam! Nostrum,
                    ducimus?
                </div>
                <button className="cards__btn">
                    View Details <ArrowIcon />
                </button>
            </div>
        </>
    );
};

export default CardComponent;
