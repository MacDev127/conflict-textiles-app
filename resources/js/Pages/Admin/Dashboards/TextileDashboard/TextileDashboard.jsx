import React, { useState } from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import CreateTextile from "../../DashboardComponents/CreateTextile/CreateTextile";
import ListTextile from "../../DashboardComponents/ListTextile/ListTextile";
import ImageUpload from "../../DashboardComponents/ImageUpload/ImageUpload";
import "./Textiledashboard.css";

const TextileDashboard = ({ textileDetail }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };
    return (
        <>
            <DashboardSidebar />

            <section className="textile-dashboard">
                <div className="textile-dashboard__container">
                    <ListTextile
                        textileDetail={textileDetail}
                        onToggleForm={toggleFormVisibility}
                    />

                    <CreateTextile />
                    <ImageUpload />
                </div>
            </section>
        </>
    );
};

export default TextileDashboard;
