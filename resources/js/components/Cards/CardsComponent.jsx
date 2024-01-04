import React from "react";
import "./CardsComponent.css";
import { ArrowIcon } from "../styles/Icons.styled";

const CardComponent = () => {
    return (
        <>
            <div className="cards__container">
                <div className="cards__image-container">
                    <img src="/images/about.jpg" alt="" />
                </div>
                <div className="cards__date">
                    <h4>25 Feb, 2024</h4>
                </div>
                <div className="cards__event-title">
                    <h2>Exhibition</h2>
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
                    <img src="/images/about.jpg" alt="" />
                </div>
                <div className="cards__date">
                    <h4>25 Feb, 2024</h4>
                </div>
                <div className="cards__event-title">
                    <h2>Exhibition</h2>
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
                    <img src="/images/about.jpg" alt="" />
                </div>
                <div className="cards__date">
                    <h4>25 Feb, 2024</h4>
                </div>
                <div className="cards__event-title">
                    <h2>Exhibition</h2>
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
