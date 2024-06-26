import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import AlertComponent from "@/components/Alert/AlertComponent";
import { router } from "@inertiajs/react";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";
import "./EditEvent.css";

const EditEvent = ({ event }) => {
    // Initialize the form data with the existing event data
    const { data, setData, put } = useForm({
        ...event, // Spread the event data into the form state
    });

    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("success");

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
        e.preventDefault();
        router.put(route("event.update", event.id), data, {
            preserveState: true,
            onSuccess: () => {
                // reset();
                setAlertMessage("Event Added Successfully!");
                setSeverity("success");
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <>
            <DashboardSidebar />
            <BreadcrumbComponent
                className="crumbs"
                breadcrumbs={[
                    { label: "Dashboard", href: "/events-dashboard" },
                    {
                        label: "Edit Event",
                        href: "",
                    },
                ]}
            />
            <section className="edit-event">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h4 className="create-event__title">Edit Event</h4>
                    <div className="form-row">
                        <div className="col-1">
                            <label htmlFor="image">Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleInputChange}
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

                            <label htmlFor="document_url">Document url</label>
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

                    <button className="edit-event__form-button" type="submit">
                        Add Event
                    </button>
                </form>
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
            </section>
        </>
    );
};

export default EditEvent;
