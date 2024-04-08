import React, { useState } from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import CreateEvent from "../../DashboardComponents/CreateEvent/CreateEvent";
import ListEvents from "../../DashboardComponents/ListEvent/ListEvents";
import "./EventsDashboard.css";

const EventsDashboard = ({ events }) => {
    return (
        <>
            <DashboardSidebar />
            <section className="events-dashboard">
                <div className="events-dashboard__container">
                    <ListEvents events={events} />
                    <CreateEvent events={events} />
                </div>
            </section>
        </>
    );
};

export default EventsDashboard;
