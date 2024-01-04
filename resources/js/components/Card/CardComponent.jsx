import React from "react";
import "./CardComponent.css";

const CardComponent = () => {
    return (
        <>
            <div className="card-container">
                <div className="image-container">
                    <img src="/images/about.jpg" alt="" />
                </div>
                <div className="date">
                    <h4>25 Feb, 2024</h4>
                </div>
                <div className="event-title">
                    <h2>Exhibition</h2>
                </div>
                <div className="event-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque optio enim neque magnam aliquam porro dolorem
                    incidunt adipisci reprehenderit suscipit quia dolorum
                    perspiciatis eaque repudiandae, esse quas ullam! Nostrum,
                    ducimus?
                </div>
                <button className="card-btn">View Details</button>
            </div>
            <div className="card-container">
                <div className="image-container">
                    <img src="/images/about.jpg" alt="" />
                </div>
                <div className="date">
                    <h4>2 March, 2024</h4>
                </div>
                <div className="event-title">
                    <h2>Work Shop</h2>
                </div>
                <div className="event-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque optio enim neque magnam aliquam porro dolorem
                    incidunt adipisci reprehenderit suscipit quia dolorum
                    perspiciatis eaque repudiandae, esse quas ullam! Nostrum,
                    ducimus?
                </div>
            </div>
            <div className="card-container">
                <div className="image-container">
                    <img src="/images/about.jpg" alt="" />
                </div>
                <div className="date">
                    <h4>25 Feb, 2024</h4>
                </div>
                <div className="event-title">
                    <h2>Exhibition</h2>
                </div>
                <div className="event-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque optio enim neque magnam aliquam porro dolorem
                    incidunt adipisci reprehenderit suscipit quia dolorum
                    perspiciatis eaque repudiandae, esse quas ullam! Nostrum,
                    ducimus?
                </div>
            </div>
        </>
    );
};

export default CardComponent;
