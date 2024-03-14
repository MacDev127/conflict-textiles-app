// In your resources/js/Pages/Admin/Textiles/CreateTextile.jsx

import React from "react";
import { useForm } from "@inertiajs/react";
import "./CreateEvent.css";

const CreateEvent = () => {
    const { data, setData, post, progress, reset } = useForm({
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
                // Additional success actions here
            },
            onError: (errors) => {
                // Handle validation errors
                // Log errors or set state to display them
            },
        });
    };

    return (
        <>
            <div>
                <h1>Create Event</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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

                    <label htmlFor="commissioned_by">Commissioned_by</label>
                    <input
                        type="text"
                        name="commissioned_by"
                        value={data.commissioned_by}
                        onChange={handleInputChange}
                        placeholder="Enter event date"
                    />

                    <label htmlFor="venue">venue</label>
                    <input
                        type="text"
                        name="venue"
                        value={data.venue}
                        onChange={handleInputChange}
                        placeholder="venue"
                    />

                    <label htmlFor="curator">Curator</label>
                    <input
                        type="text"
                        name="curator"
                        value={data.curator}
                        onChange={handleInputChange}
                        placeholder="Curator"
                    />
                    <label htmlFor="facilitator">facilitator</label>
                    <input
                        type="text"
                        name="facilitator"
                        value={data.facilitator}
                        onChange={handleInputChange}
                        placeholder="facilitator"
                    />
                    <label htmlFor="description">description</label>
                    <input
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={handleInputChange}
                        placeholder="description"
                    />

                    <label htmlFor="outcome">Outcome</label>
                    <input
                        type="text"
                        name="outcome"
                        value={data.outcome}
                        onChange={handleInputChange}
                        placeholder="outcome"
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
                    {/* ... other fields ... */}
                    <button type="submit">Submit</button>
                </form>
                {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                )}
            </div>
        </>
    );
};

export default CreateEvent;
