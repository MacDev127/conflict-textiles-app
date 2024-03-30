import React from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import CreateTextile from "../../DashboardComponents/CreateTextile/CreateTextile";
import ListTextile from "../../DashboardComponents/ListTextile/ListTextile";
import "./Textiledashboard.css";

const TextileDashboard = ({ textileDetail }) => {
    return (
        <>
            <DashboardSidebar />

            <section className="textile-dashboard">
                <div className="textile-dashboard__container">
                    <ListTextile textileDetail={textileDetail} />

                    <CreateTextile />
                </div>
            </section>
        </>
    );
};

export default TextileDashboard;
