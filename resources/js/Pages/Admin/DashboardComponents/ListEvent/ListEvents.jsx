import React from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";

import "./ListEvents.css";

const ListEvents = ({ events }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this event?")) {
            router.delete(route("event.destroy", id), {
                onSuccess: () => {
                    // Optionally refresh the list or show a success message
                },
            });
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td>{event.type}</td>
                            <td>{event.location}</td>

                            <td>{event.event_time}</td>
                            <td>{event.event_date}</td>

                            <td>
                                <Link
                                    href={route("admin.events.edit", event.id)}
                                >
                                    Edit
                                </Link>
                                &nbsp;|&nbsp;
                                <button onClick={() => handleDelete(event.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEvents;
