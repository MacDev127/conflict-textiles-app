import React from "react";
import { useState } from "react";

import "./Dashboard.css";

import { Link } from "@inertiajs/react";

import DashboardSidebar from "./DashboardComponents/DashboardSidebarComponent/DashboardSidebar";
// import DashboardHeader from "./DashboardComponents/DashboardHeaderComponent/DashboardHeader";

const Dashboard = () => {
    return (
        // test

        <DashboardSidebar />

        // test

        // <div className="admin-dashboard">
        //     <h1>Admin Dashboard</h1>

        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link href="/admin/textiles/add">Add Textile</Link>
        //             </li>
        //             <li>
        //                 <Link href="/admin/events/create">Add Event</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
    );
};

export default Dashboard;
