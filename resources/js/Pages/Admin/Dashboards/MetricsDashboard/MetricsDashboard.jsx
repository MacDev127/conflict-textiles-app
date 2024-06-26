import React from "react";

import "./MetricsDashboard.css";

import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import DashboardBarChart from "../../DashboardComponents/DashBoardcharts/DashboardBarChart";
import DashboardPieChart from "../../DashboardComponents/DashBoardcharts/DashoardPieChart";
import DashboardLineChart from "../../DashboardComponents/DashBoardcharts/DashboardLineChart";

const MetricsDashboard = ({ authUser }) => {
    return (
        <>
            <DashboardSidebar authUser={authUser} />

            <section className="Dashboard">
                <div className="dashboard-chart__container">
                    <div className="dashboard-chart">
                        <p>Most Viewed Items</p>

                        <DashboardBarChart />
                    </div>
                    <div className="dashboard-chart">
                        <p>Activity</p>
                        <DashboardLineChart />
                    </div>
                    <div className="dashboard-chart">
                        <p> User Location</p>

                        <DashboardPieChart />
                    </div>
                </div>
            </section>
        </>
    );
};

export default MetricsDashboard;
