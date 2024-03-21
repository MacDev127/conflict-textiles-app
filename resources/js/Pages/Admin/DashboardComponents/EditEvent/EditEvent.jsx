import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import ModalComponent from "@/components/Modal/ModalComponent";
import { router } from "@inertiajs/react";

const EditEvent = ({ event }) => {
    // Initialize the form data with the existing event data
    const { data, setData, put, processing } = useForm({
        ...event, // Spread the event data into the form state
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

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
                setSuccessMessage("Event Updated Successfully");
                setIsModalOpen(true);
            },
            // onError: () => {
            //     // Handle validation errors, you might want to set an error message here
            // },
        });
    };

    return (
        <>
            <DashboardSidebar />
            <section className="edit-event">
                <h1 className="edit-event__title">Edit Event</h1>

                <div className="edit-event__form-container">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                    value={data.title || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter event title"
                                />

                                <label htmlFor="type">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={data.type || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter event type"
                                />

                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={data.location || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter event location"
                                />
                                <label htmlFor="facilitator">Facilitator</label>
                                <input
                                    type="text"
                                    name="facilitator"
                                    value={data.facilitator || ""}
                                    onChange={handleInputChange}
                                    placeholder="Facilitator"
                                />
                            </div>
                            <div className="col-2">
                                <label htmlFor="venue">Venue</label>
                                <input
                                    type="text"
                                    name="venue"
                                    value={data.venue || ""}
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
                                    value={data.curator || ""}
                                    onChange={handleInputChange}
                                    placeholder="Curator"
                                />
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="textarea"
                                    id="description"
                                    name="description"
                                    value={data.description || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter event description"
                                    rows="6"
                                    cols="30"
                                ></textarea>
                            </div>
                            <div className="col-3">
                                <label htmlFor="commissioned_by">
                                    Commissioned_by
                                </label>
                                <input
                                    type="text"
                                    name="commissioned_by"
                                    value={data.commissioned_by || ""}
                                    onChange={handleInputChange}
                                    placeholder="Enter event date"
                                />

                                <label htmlFor="outcome">Outcome</label>
                                <input
                                    type="text"
                                    name="outcome"
                                    value={data.outcome || ""}
                                    onChange={handleInputChange}
                                    placeholder="Outcome"
                                />

                                <label htmlFor="document_url">
                                    Document url
                                </label>
                                <input
                                    type="text"
                                    name="document_url"
                                    value={data.document_url || ""}
                                    onChange={handleInputChange}
                                    placeholder="document_url"
                                />
                                <label htmlFor="textile_url">Textile url</label>

                                <input
                                    type="text"
                                    name="textile_url"
                                    value={data.textile_url || ""}
                                    onChange={handleInputChange}
                                    placeholder="textile_url"
                                />
                            </div>
                        </div>
                        <button
                            className="edit-event__form-button"
                            type="submit"
                            disabled={processing}
                        >
                            Update Event
                        </button>
                    </form>
                </div>
                {isModalOpen && (
                    <ModalComponent
                        open={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    >
                        <div className="success__message">
                            <h2>{successMessage}</h2>
                            <h5 className="return__link">
                                <InertiaLink
                                    href={route("admin.events-dashboard")}
                                >
                                    Back to Event Dashboard
                                </InertiaLink>
                            </h5>
                        </div>
                    </ModalComponent>
                )}
            </section>
        </>
    );
};

export default EditEvent;
