import React, { useState } from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import CreateTextile from "../../DashboardComponents/CreateTextile/CreateTextile";
import ListTextile from "../../DashboardComponents/ListTextile/ListTextile";
import "./Textiledashboard.css";

const TextileDashboard = ({ galleryImages }) => {
    return (
        <>
            <DashboardSidebar
                menuItems={{
                    metrics: true,
                    events: true,
                    textiles: true,
                    home: true,
                    bookmarks: false,
                    roles: true,
                }}
            />
            <section className="textile-dashboard">
                <div className="textile-dashboard__container">
                    <ListTextile galleryImages={galleryImages} />

                    <CreateTextile galleryImages={galleryImages} />
                </div>
            </section>
        </>
    );
};

export default TextileDashboard;
