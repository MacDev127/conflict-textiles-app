import React from "react";
import { Link } from "@inertiajs/react";
import "./ShowEvents.css";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { router } from "@inertiajs/react";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";

import EditIcon from "@mui/icons-material/Edit";
import DashboardSidebar from "../DashboardComponents/DashboardSidebar/DashboardSidebar";

const ShowEvents = ({ event }) => {
    // Prepare details for mapping
    const details = [
        { label: "Type", value: event.type },
        { label: "Location", value: event.location },
        { label: "Date", value: event.event_date },
        { label: "Time", value: event.event_time },
        { label: "Venue", value: event.venue },
        { label: "Curator", value: event.curator },
        { label: "Description", value: event.description },
        // Add other details as needed
    ];

    const handleDelete = () => {
        if (
            window.confirm(
                "Are you sure you want to delete this event? This action cannot be undone."
            )
        ) {
            router.delete(route("event.destroy", { id: event.id }), {
                onSuccess: () => {
                    router.visit(route("admin.events-dashboard"));
                },
            });
        }
    };

    return (
        <>
            <DashboardSidebar />
            <BreadcrumbComponent
                breadcrumbs={[
                    { label: "Dashboard", href: "/events-dashboard" },
                    {
                        label: "Event Details",
                        href: "",
                    },
                ]}
            />
            <section className="show__events">
                <div className="event-image-container">
                    {event.image && (
                        <img
                            src={event.image}
                            alt="Event"
                            className="event-image"
                        />
                    )}
                    <div className="show__events-icons">
                        <Link
                            href={route("admin.events.edit", { id: event.id })}
                            className="edit-link"
                        >
                            <Tooltip title="Edit" arrow>
                                <EditIcon
                                    sx={{
                                        color: "#df0144",
                                        marginRight: "8px",
                                    }}
                                    aria-label="Edit Event"
                                >
                                    {/* <FaPen /> */}
                                </EditIcon>
                            </Tooltip>
                        </Link>
                        <Tooltip title="Delete" arrow>
                            <DeleteIcon
                                sx={{ color: "#df0144", marginRight: "8px" }}
                                aria-label="Delete Event"
                                onClick={handleDelete}
                            >
                                {/* <FaTrashCan style={{ color: "crimson" }} /> */}
                            </DeleteIcon>
                        </Tooltip>
                    </div>
                </div>

                <div className="event-container">
                    <div className="event-details">
                        <h1>{event.title}</h1>
                        {details.map((detail, index) => (
                            <div key={index} className="detail">
                                <span>{detail.label}:</span> {detail.value}
                            </div>
                        ))}
                    </div>
                    {/* <Link href="/admin/events-dashboard" className="back-link">
                Back to Events Dashboard
            </Link> */}
                </div>
            </section>
        </>
    );
};

export default ShowEvents;
