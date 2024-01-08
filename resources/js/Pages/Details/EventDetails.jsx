import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Link } from "@inertiajs/react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";

import { IconContext } from "react-icons";
import "./EventDetails.css";

const EventDetails = () => {
    return (
        <>
            <Navbar />
            <div className="event-details">
                <div className="wrapper">
                    <div className="col-left">
                        <div className="image">
                            <img src="/images/about.jpg" alt="" />
                        </div>
                        <div className="event-title">
                            <h1>Connecting Ties</h1>
                        </div>
                        <div className="event-description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Harum ipsum deleniti dolorem
                                non quae natus omnis nam debitis nulla sapiente
                                accusantium minus aut nobis possimus
                                voluptatibus illum qui vero, officiis ipsa amet
                                quidem dolor quisquam. Repudiandae quam quasi
                                ullam et quod error ex animi vel quibusdam minus
                                esse, optio accusamus harum minima? Minima
                                voluptates repellendus rem quidem iusto
                                voluptatum officiis, veniam recusandae sed
                                quibusdam harum at neque laboriosam facilis
                                autem delectus odio aliquid iste odit sint.
                                Eveniet magnam aliquid commodi velit ducimus
                                esse consectetur maiores, quas, facilis tempore
                                deleniti nemo tempora. Facilis aperiam numquam
                                perspiciatis facere soluta culpa cumque ipsa.
                            </p>
                        </div>
                        {/* Form */}
                        <div className="event-register">
                            <section className="container">
                                <header>Event Registration Form</header>
                                <form action="#" class="form">
                                    <div className="input-box">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter full name"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label>Email Address</label>
                                        <input
                                            type="text"
                                            placeholder="Enter email address"
                                            required
                                        />
                                    </div>
                                    <div className="column">
                                        <div className="input-box">
                                            <label>Phone Number</label>
                                            <input
                                                type="number"
                                                placeholder="Enter phone number"
                                                required
                                            />
                                        </div>
                                        {/* <div className="input-box">
                                            <label>Birth Date</label>
                                            <input
                                                type="date"
                                                placeholder="Enter birth date"
                                                required
                                            />
                                        </div> */}
                                    </div>
                                    {/* <div className="gender-box">
                                        <h3>Gender</h3>
                                        <div className="gender-option">
                                            <div className="gender">
                                                <input
                                                    type="radio"
                                                    id="check-male"
                                                    name="gender"
                                                    checked
                                                />
                                                <label for="check-male">
                                                    male
                                                </label>
                                            </div>
                                            <div className="gender">
                                                <input
                                                    type="radio"
                                                    id="check-female"
                                                    name="gender"
                                                />
                                                <label for="check-female">
                                                    Female
                                                </label>
                                            </div>
                                            <div className="gender">
                                                <input
                                                    type="radio"
                                                    id="check-other"
                                                    name="gender"
                                                />
                                                <label for="check-other">
                                                    prefer not to say
                                                </label>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="input-box address">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            placeholder="Enter street address"
                                            required
                                        />
                                        <input
                                            type="text"
                                            placeholder="Enter street address line 2"
                                            required
                                        />
                                        <div className="column">
                                            <div className="select-box">
                                                <select>
                                                    <option hidden>
                                                        Country
                                                    </option>
                                                    <option>America</option>
                                                    <option>Japan</option>
                                                    <option>India</option>
                                                    <option>Nepal</option>
                                                </select>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Enter your city"
                                                required
                                            />
                                        </div>
                                        <div className="column">
                                            <input
                                                type="text"
                                                placeholder="Enter your region"
                                                required
                                            />
                                            <input
                                                type="number"
                                                placeholder="Enter postal code"
                                                required
                                            />
                                        </div>
                                    </div> */}
                                    <button>Submit</button>
                                </form>
                            </section>
                        </div>
                        {/* Form end */}
                    </div>
                    <div className="col-right">
                        <div className="event-info">
                            <div className="info-details">
                                <h2 className="title">Event Info</h2>

                                <IconContext.Provider
                                    value={{
                                        color: "dc143c",
                                        size: "30px",
                                    }}
                                >
                                    <div className="event-icon">
                                        <FaPhone /> <p>02871 223445</p>
                                    </div>
                                    <div className="event-icon">
                                        <FaLocationDot />{" "}
                                        <p>Ulster University</p>
                                    </div>
                                    <div className="event-icon">
                                        <FaCalendarDays />{" "}
                                        <p> 25 Feb - 20 March</p>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className="event-location">
                            <div className="title">
                                <h2>Event Location</h2>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310.9636388401223!2d-5.931679822859798!3d54.60463317983631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861084ca01b3ccd%3A0xf36a06a9666eabcc!2sUlster%20University!5e0!3m2!1sen!2suk!4v1704663178549!5m2!1sen!2suk"
                                width="400"
                                height="300"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default EventDetails;
