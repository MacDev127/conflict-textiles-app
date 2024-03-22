import React from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";
import { IoMdAdd } from "react-icons/io";
import { MdOutlinePlaylistAdd } from "react-icons/md";

import Tooltip from "@mui/material/Tooltip"; // import EditIcon from "@mui/icons-material/Edit";
import "./ListEvents.css";

const ListEvents = ({ events, onToggleForm }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this event?")) {
            router.delete(route("event.destroy", id), {
                onSuccess: () => {},
            });
        }
    };
    console.log(events);

    return (
        <div>
            <table>
                <caption>
                    Event Details
                    <Tooltip title="Add Event" arrow>
                        <IconButton
                            onClick={onToggleForm}
                            sx={{
                                fontSize: "16px",
                                position: "absolute",
                                top: "14px",
                                right: "0",
                                color: "white",
                            }}
                        >
                            <MdOutlinePlaylistAdd
                                style={{ fontSize: "30px" }}
                            />
                        </IconButton>
                    </Tooltip>
                </caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Venue</th>
                        <th>Curator</th>
                        <th>Facilitator</th>
                        <th>Commissioned By</th>
                        <th>Document Url</th>
                        <th>Textile Url</th>
                        <th>Image</th>
                        <th>Outcome</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id} className="active-row">
                            <td>{event.title}</td>
                            <td>{event.type}</td>
                            <td>{event.location}</td>
                            <td>{event.event_date}</td>
                            <td>{event.event_time}</td>
                            <td>{event.venue}</td>
                            <td>{event.curator}</td>
                            <td>{event.facilitator}</td>
                            <td>{event.commissioned_by}</td>
                            <td>{event.document_url}</td>
                            <td>{event.textile_url}</td>
                            <td>{event.image}</td>
                            <td>{event.outcome}</td>
                            <td>{event.description}</td>

                            <td className="table-icons">
                                <Link
                                    href={route("admin.events.edit", event.id)}
                                >
                                    <Tooltip title="Edit" arrow>
                                        <IconButton
                                            sx={{
                                                fontSize: "16px",
                                            }}
                                        >
                                            <FaPen />
                                        </IconButton>
                                    </Tooltip>
                                </Link>
                                <Tooltip title="Delete" arrow>
                                    <IconButton
                                        onClick={() => handleDelete(event.id)}
                                        sx={{
                                            fontSize: "16px",
                                        }}
                                    >
                                        <FaTrashCan
                                            style={{ color: "crimson" }}
                                        />
                                    </IconButton>
                                </Tooltip>
                                {/* <button onClick={() => handleDelete(event.id)}>
                                    <FaTrashCan />
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEvents;
