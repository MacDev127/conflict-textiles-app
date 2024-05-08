// In your resources/js/Pages/Admin/Textiles/CreateTextile.jsx

import React, { useState, useRef } from "react";
import { useForm } from "@inertiajs/react";
import "./CreateEvent.css";
import AlertComponent from "@/components/Alert/AlertComponent";

const CreateEvent = () => {
    const { data, setData, post, reset } = useForm({
        image: null,
        title: "",
        event_time: "",
        location: "",
        type: "",
        event_date: "",
        commissioned_by: "",
        venue: "",
        curator: "",
        facilitator: "",
        description: "",
        outcome: "",
        document_url: "",
        textile_url: "",
    });

    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("success");
    const fileInputRef = useRef(null); // Create a ref for the file input

    const handleAlertClose = () => {
        setAlertMessage("");
    };

    const handleInputChange = (e) => {
        const key = e.target.name;
        const value =
            e.target.type === "file" ? e.target.files[0] : e.target.value;
        setData(key, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission action (page reload)
        post("/admin/events", {
            // Correct URL, no template literal or variable
            onSuccess: () => {
                reset(); // Reset the fields, or you can specify which fields to reset
                setAlertMessage("Event Added Successfully!");
                setSeverity("success");
                fileInputRef.current.value = "";
            },
            onError: (errors) => {
                if (errors.image) {
                    setAlertMessage(errors.image);
                    setSeverity("error");
                }
                console.error(errors);
            },
        });
    };

    return (
        <>
            <section className="create-event">
                <div className="create-event__form-wrapper">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h4 className="create-event__title">Create Event</h4>
                        <div className="form-row">
                            <div className="col-1">
                                <label htmlFor="image">Image</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleInputChange}
                                    ref={fileInputRef} // Attach the ref to your file input
                                />

                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    onChange={handleInputChange}
                                    placeholder="Enter event title"
                                />

                                <label htmlFor="type">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={data.type}
                                    onChange={handleInputChange}
                                    placeholder="Enter event type"
                                />

                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={data.location}
                                    onChange={handleInputChange}
                                    placeholder="Enter event location"
                                />
                            </div>
                            <div className="col-2">
                                <label htmlFor="venue">Venue</label>
                                <input
                                    type="text"
                                    name="venue"
                                    value={data.venue}
                                    onChange={handleInputChange}
                                    placeholder="Venue"
                                />
                                <label htmlFor="event_time">Time</label>
                                <input
                                    type="time"
                                    name="event_time"
                                    value={data.event_time}
                                    onChange={handleInputChange}
                                    placeholder="Enter event time"
                                />
                                <label htmlFor="event_date">Date</label>
                                <input
                                    type="date"
                                    name="event_date"
                                    value={data.event_date}
                                    onChange={handleInputChange}
                                    placeholder="Enter event date"
                                />

                                <label htmlFor="curator">Curator</label>
                                <input
                                    type="text"
                                    name="curator"
                                    value={data.curator}
                                    onChange={handleInputChange}
                                    placeholder="Curator"
                                />
                            </div>
                            <div className="col-3">
                                <label htmlFor="commissioned_by">
                                    Commissioned_by
                                </label>
                                <input
                                    type="text"
                                    name="commissioned_by"
                                    value={data.commissioned_by}
                                    onChange={handleInputChange}
                                    placeholder="Enter event date"
                                />

                                <label htmlFor="facilitator">Facilitator</label>
                                <input
                                    type="text"
                                    name="facilitator"
                                    value={data.facilitator}
                                    onChange={handleInputChange}
                                    placeholder="Facilitator"
                                />

                                <label htmlFor="document_url">
                                    Document url
                                </label>
                                <input
                                    type="text"
                                    name="document_url"
                                    value={data.document_url}
                                    onChange={handleInputChange}
                                    placeholder="document_url"
                                />
                                <label htmlFor="textile_url">Textile url</label>

                                <input
                                    type="text"
                                    name="textile_url"
                                    value={data.textile_url}
                                    onChange={handleInputChange}
                                    placeholder="textile_url"
                                />
                            </div>
                        </div>

                        <div className="textarea__wrapper">
                            <div className="textarea__box">
                                <label htmlFor="outcome">Outcome</label>
                                <textarea
                                    className="textarea"
                                    id="outcome"
                                    name="outcome"
                                    value={data.outcome}
                                    onChange={handleInputChange}
                                    placeholder="Enter event outcome"
                                    rows="6"
                                    cols="30"
                                ></textarea>
                            </div>

                            <div className="textarea__box">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="textarea"
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter event description"
                                    rows="6"
                                    cols="30"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            className="create-event__form-button"
                            type="submit"
                        >
                            Create Event
                        </button>
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
            </section>
        </>
    );
};

export default CreateEvent;
