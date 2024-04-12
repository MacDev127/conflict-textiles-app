import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import "./EventRegister.css";

//Components
import AlertComponent from "@/components/Alert/AlertComponent";
import ReturnLinkComponent from "@/components/Return/ReturnLinkComponent";

const EventRegister = ({ eventId }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
        number: "",
        birthDate: "",
        gender: "male",
    });

    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const handleAlertClose = () => {
        setAlertMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(`/event/${eventId}/eventRegister`, {
            onSuccess: () => {
                reset();
                setAlertMessage("Event Registration Sucessful!");
                setSeverity("success");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <section className="event-register">
            <Link href={route("home")}>
                <div className="logo-link">
                    <img src="/images/misc/logo2.png" alt="Logo" />
                </div>
            </Link>
            <div className="event-register__container">
                <h2>Event Registration</h2>
                <form onSubmit={handleSubmit} className="form">
                    {/* Bind each input to the useForm state */}
                    <div className="event-register__input-box">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter full name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        {errors.name && (
                            <div className="error">{errors.name}</div>
                        )}
                    </div>

                    <div className="event-register__input-box">
                        <label>Email Address</label>
                        <input
                            type="email" // Ensure type is email for proper validation
                            placeholder="Enter email address"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            name="email"
                        />
                        {errors.email && (
                            <div className="error">{errors.email}</div>
                        )}
                    </div>

                    <div className="event-register__input-box">
                        <label>Phone Number</label>
                        <input
                            type="text" // Changed type to text to allow for international numbers
                            placeholder="Enter phone number"
                            value={data.number}
                            onChange={(e) => setData("number", e.target.value)}
                            required
                            name="number"
                        />
                    </div>

                    {/* <div className="event-register__input-box">
                        <label>Birth Date</label>
                        <input
                            type="date"
                            name="birthDate"
                            value={data.birthDate}
                            onChange={(e) =>
                                setData("birthDate", e.target.value)
                            }
                            required
                        />
                    </div> */}

                    {/* Gender Radio Buttons */}
                    <div className="event-register__gender-box">
                        <h3>Gender</h3>
                        <div className="event-register__gender-option">
                            {/* Inline onChange handler for radio buttons */}
                            <div className="event-register__gender">
                                <input
                                    type="radio"
                                    id="check-male"
                                    name="gender"
                                    value="male"
                                    checked={data.gender === "male"}
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                />
                                <label htmlFor="check-male">Male</label>
                            </div>
                            <div className="event-register__gender">
                                <input
                                    type="radio"
                                    id="check-female"
                                    name="gender"
                                    value="female"
                                    checked={data.gender === "female"}
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                />
                                <label htmlFor="check-female">Female</label>
                            </div>
                            <div className="event-register__gender">
                                <input
                                    type="radio"
                                    id="check-other"
                                    name="gender"
                                    value="other"
                                    checked={data.gender === "other"}
                                    onChange={(e) =>
                                        setData("gender", e.target.value)
                                    }
                                />
                                <label htmlFor="check-other">
                                    Prefer not to say
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="box-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="form__alert">
                {alertMessage && (
                    <AlertComponent
                        severity={severity}
                        closeHandler={handleAlertClose}
                    >
                        {alertMessage}
                    </AlertComponent>
                )}
            </div>
            <ReturnLinkComponent to="/events">
                Back to Events
            </ReturnLinkComponent>
        </section>
    );
};

export default EventRegister;
