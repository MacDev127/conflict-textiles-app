import React, { useState } from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import CreateEvent from "../../DashboardComponents/CreateEvent/CreateEvent";
import ListEvents from "../../DashboardComponents/ListEvent/ListEvents";
import "./EventsDashboard.css";
import { CSSTransition } from "react-transition-group";

const EventsDashboard = ({ events, authUser }) => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <DashboardSidebar authUser={authUser} />
            <section className="events-dashboard">
                <div className="events-dashboard__container">
                    <ListEvents
                        events={events}
                        showForm={showForm}
                        toggleForm={toggleForm}
                    />

                    <CSSTransition
                        in={showForm}
                        timeout={300}
                        classNames="form"
                        unmountOnExit
                    >
                        <CreateEvent events={events} />
                    </CSSTransition>
                </div>
            </section>
        </>
    );
};

export default EventsDashboard;
