import React from "react";
import "./CardsComponent.css";
import { ArrowIcon } from "../styles/Icons.styled";
import { Link } from "@inertiajs/react";

const CardComponent = () => {
    return (
        <>
            <div className="cards__container">
                <div className="cards__image-container">
                    <img src="/images/about.jpg" alt="" />
                </div>
                <div className="cards__info">
                    <h3 className="cards__event-type"> Exhibition</h3>
                    <h4 className="cards__event-date">
                        25 Feb - 20 March, 2024
                    </h4>
                </div>

                <div className="cards__event-title">
                    <h2>Connecting Ties </h2>
                </div>
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
