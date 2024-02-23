import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TabsComponent from "@/components/Tabs/TabsComponent";
import ButtonComponent from "@/components/Button/ButtonComponent";
import { Link } from "@inertiajs/react";

import {
    FaEnvelope,
    FaLocationDot,
    FaCalendarDays,
    FaClock,
} from "react-icons/fa6";
import { IconContext } from "react-icons";
import "./EventDetails.css";

const EventDetails = ({ event }) => {
    const formattedDate = new Date(event.event_date).toLocaleDateString(
        "en-US",
        {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }
    );
    const formattedTime = new Date(
        "1970-01-01T" + event.event_time + "Z"
    ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return (
        <>
            <Navbar />
            <section className="event__details">
                <div className="event__details-event__title">{event.title}</div>
                <div className="event__details-wrapper">
                    <div className="event__details-col-left">
                        <div className="event__details-image">
                            <img src={event.image} alt={event.title} />
                        </div>

                        <div className="event__details-event__description">
                            <p>
                                {event.description
                                    .split("\n")
                                    .map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                            </p>
                        </div>
                    </div>
                    <div className="event__details-col-right">
                        <div className="event__details-event__info">
                            <h2>{event.type}</h2>
                            <IconContext.Provider
                                value={{ color: "#dc143c", size: "20px" }}
                            >
                                <ul>
                                    <li>
                                        <div className="event__details-event__info-icon">
                                            <FaCalendarDays />
                                        </div>
                                        <div className="event__details-event__info-content">
                                            <h4>Date</h4>
                                            <p>{formattedDate}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="event__details-event__info-icon">
                                            <FaClock />
                                        </div>
                                        <div className="event__details-event__info-content">
                                            <h4>Time</h4>
                                            <p>{formattedTime}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="event__details-event__info-icon">
                                            <FaLocationDot />
                                        </div>
                                        <div className="event__details-event__info-content">
                                            <h4>Venue</h4>
                                            <p>{event.location}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="event__details-event__info-icon">
                                            <FaEnvelope />
                                        </div>
                                        <div className="event__details-event__info-content">
                                            <h4>Enquiries</h4>
                                            <p>info@conflicttextiles.com</p>
                                        </div>
                                    </li>
                                    <ButtonComponent className="event__details-reg-btn ">
                                        <Link
                                            href={`/event/${event.id}/registerPage`}
                                        >
                                            Register
                                        </Link>
                                    </ButtonComponent>
                                </ul>
                            </IconContext.Provider>
                        </div>
                    </div>

                    <TabsComponent event={event} />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default EventDetails;
