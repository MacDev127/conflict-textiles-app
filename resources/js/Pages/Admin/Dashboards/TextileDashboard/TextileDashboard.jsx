import React, { useState } from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import CreateTextile from "../../DashboardComponents/CreateTextile/CreateTextile";
import ListTextile from "../../DashboardComponents/ListTextile/ListTextile";
import { CSSTransition } from "react-transition-group";
import "./Textiledashboard.css";

const TextileDashboard = ({ galleryImages, authUser, type }) => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);

    console.log(type);
    return (
        <>
            <DashboardSidebar authUser={authUser} />
            <section className="textile-dashboard">
                <div className="textile-dashboard__container">
                    <ListTextile
                        galleryImages={galleryImages}
                        showForm={showForm}
                        toggleForm={toggleForm}
                        type={type}
                    />

                    <CSSTransition
                        in={showForm}
                        timeout={300}
                        classNames="form"
                        unmountOnExit
                    >
                        <CreateTextile
                            galleryImages={galleryImages}
                            type={type}
                        />
                    </CSSTransition>
                </div>
            </section>
        </>
    );
};

export default TextileDashboard;
