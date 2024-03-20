import React from "react";
import { useState } from "react";

import "./Dashboard.css";
import "../Admin/Events/CreateEvent.css";

import { Link } from "@inertiajs/react";

import DashboardSidebar from "./DashboardComponents/DashboardSidebarComponent/DashboardSidebar";
import DashboardBarChart from "./DashboardComponents/DashBoardcharts/DashboardBarChart";
import DashboardPieChart from "./DashboardComponents/DashBoardcharts/DashoardPieChart";
import DashboardLineChart from "./DashboardComponents/DashBoardcharts/DashboardLineChart";
import DashboardVerticalBarChart from "./DashboardComponents/DashBoardcharts/DashboardVerticalBarChart";
import { useForm } from "@inertiajs/react";

const Dashboard = () => {
    const { data, setData, post, reset } = useForm({
        image: null,
        title: "",
        event_time: "",
        location: "",
        type: "",
        event_date: "",
        commissioned_by: "",
        venue: "",
        curator: "",
        facilitator: "",
        description: "",
        outcome: "",
        document_url: "",
        textile_url: "",
    });

    const handleInputChange = (e) => {
        const key = e.target.name;
        const value =
            e.target.type === "file" ? e.target.files[0] : e.target.value;
        setData(key, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission action (page reload)
        post("/admin/events", {
            // Correct URL, no template literal or variable
            onSuccess: () => {
                reset(); // Reset the fields, or you can specify which fields to reset
                // Additional success actions here
            },
            onError: (errors) => {
                // Handle validation errors
                // Log errors or set state to display them
            },
        });
    };
    return (
        // test

        <>
            // test
            <section className="Dashboard">
                <DashboardSidebar />

                <div className="dashboard-chart__container">
                    <div className="dashboard-chart1">
                        <p>Most Viewed Items</p>

                        <DashboardBarChart />
                    </div>
                    <div className="dashboard-chart2">
                        <p>Activity</p>
                        <DashboardLineChart />
                    </div>
                    <div className="dashboard-chart3">
                        <p> User Location</p>

                        <DashboardPieChart />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
