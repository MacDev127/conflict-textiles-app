import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TabsComponent from "@/components/Tabs/TabsComponent";
import ButtonComponent from "@/components/Button/ButtonComponent";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";
import { Link } from "@inertiajs/react";

import { FaLocationDot, FaCalendarDays, FaClock } from "react-icons/fa6";
import { IconContext } from "react-icons";
import "./EventDetails.css";

const EventDetails = ({ event, authUser, auth }) => {
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
            <Navbar authUser={authUser} auth={auth} />
            <BreadcrumbComponent
                breadcrumbs={[
                    { label: "Events", href: "/events" },
                    {
                        label: "Event Details",
                        href: "",
                    },
                ]}
            />
            <section className="event__details">
                <div className="event__details-event__title">{event.title}</div>
                <div className="event__details-wrapper">
                    <div className="event__details-box-1">
                        <div className="event__details-image">
                            <img src={event.image} alt={event.title} />
                        </div>

                        <div className="event__details-event__info">
                            <h2 className="event__details-event__type">
                                {event.type}
                            </h2>
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

                                    <div className="event__details-btn-wrapper">
                                        <ButtonComponent className="event__details-reg-btn">
                                            <Link
                                                href={`/event/${event.id}/registerPage`}
                                            >
                                                Register
                                            </Link>
                                        </ButtonComponent>
                                    </div>
                                </ul>
                                <div className="event__details-extra-btn">
                                    <ButtonComponent className="event__details-reg-btn">
                                        <Link
                                            href={`/event/${event.id}/registerPage`}
                                        >
                                            Register
                                        </Link>
                                    </ButtonComponent>
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>

                <div className="event__details-box-2">
                    <div className="event__details-event__description">
                        {event.description ? (
                            <p>{event.description}</p>
                        ) : (
                            <p>No description available.</p>
                        )}
                    </div>
                    <div className="event__details-tabs">
                        <TabsComponent event={event} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default EventDetails;
