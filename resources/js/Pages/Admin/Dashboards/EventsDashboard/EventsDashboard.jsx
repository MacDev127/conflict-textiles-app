import React, { useState } from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import CreateEvent from "../../DashboardComponents/CreateEvent/CreateEvent";
import ListEvents from "../../DashboardComponents/ListEvent/ListEvents";
import "./EventsDashboard.css";

const EventsDashboard = ({ events }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };
    return (
        <>
            <DashboardSidebar />
            <section className="events-dashboard">
                <div className="events-dashboard__container">
                    <ListEvents
                        onToggleForm={toggleFormVisibility}
                        events={events}
                    />
                    <CreateEvent events={events} isVisible={isFormVisible} />
                </div>
            </section>
        </>
    );
};

export default EventsDashboard;
