import React, { useState } from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import CreateTextile from "../../DashboardComponents/CreateTextile/CreateTextile";
import ListTextile from "../../DashboardComponents/ListTextile/ListTextile";
import { CSSTransition } from "react-transition-group";
import "./Textiledashboard.css";

const TextileDashboard = ({ galleryImages, authUser }) => {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);

    // You imported defaultMenuItems but are overwriting it here, let's merge properly:
    const menuItems = {
        ...defaultMenuItems,
        bookmarks: false, // Define or override specific settings here
    };

    console.log(menuItems); // Should now print the merged menu items correctly

    return (
        <>
            <DashboardSidebar authUser={authUser} menuItems={menuItems} />
            <section className="textile-dashboard">
                <div className="textile-dashboard__container">
                    <ListTextile
                        galleryImages={galleryImages}
                        showForm={showForm}
                        toggleForm={toggleForm}
                    />

                    <CSSTransition
                        in={showForm}
                        timeout={300}
                        classNames="form"
                        unmountOnExit
                    >
                        <CreateTextile galleryImages={galleryImages} />
                    </CSSTransition>
                </div>
            </section>
        </>
    );
};

export default TextileDashboard;
