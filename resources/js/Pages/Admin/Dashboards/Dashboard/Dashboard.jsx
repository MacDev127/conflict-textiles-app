import React from "react";

import "./Dashboard.css";

import { Link } from "@inertiajs/react";

import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import DashboardBarChart from "../../DashboardComponents/DashBoardcharts/DashboardBarChart";
import DashboardPieChart from "../../DashboardComponents/DashBoardcharts/DashoardPieChart";
import DashboardLineChart from "../../DashboardComponents/DashBoardcharts/DashboardLineChart";
// import DashboardVerticalBarChart from "./DashboardComponents/DashBoardcharts/DashboardVerticalBarChart";
import ListEvents from "../../DashboardComponents/CreateEvent/CreateEvent";

const Dashboard = ({ events }) => {
    return (
        <>
            <DashboardSidebar
                menuItems={{
                    dashboard: true,
                    events: true,
                    textiles: true,
                    home: true,
                    bookmarks: true,
                    roles: true,
                }}
            />

            <section className="Dashboard">
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
