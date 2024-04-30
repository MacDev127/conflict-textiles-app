import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import "./EventRegister.css";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";

//Components
import AlertComponent from "@/components/Alert/AlertComponent";

const EventRegister = ({ eventId, type }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
        number: "",
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

            onError: () => {
                if (errors.email) {
                    setAlertMessage(errors.email);
                    setSeverity("error");
                } else if (errors.number) {
                    setAlertMessage(errors.number);
                    setSeverity("error");
                }
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
                    </div>

                    <div className="event-register__input-box">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            name="email"
                        />
                    </div>

                    <div className="event-register__input-box">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            value={data.number}
                            onChange={(e) => setData("number", e.target.value)}
                            required
                            name="number"
                        />
                    </div>

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
                        variant="outlined"
                        severity={severity}
                        closeHandler={handleAlertClose}
                    >
                        {alertMessage}
                    </AlertComponent>
                )}
            </div>
            <BreadcrumbComponent
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Event Details",
                        href: `/event/${eventId}/details`,
                    },
                    { label: "Register", href: "" },
                ]}
            />
        </section>
    );
};

export default EventRegister;
