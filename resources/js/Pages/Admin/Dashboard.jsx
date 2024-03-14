import React from "react";
import "./Dashboard.css";

import { Link } from "@inertiajs/react";

const Dashboard = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/admin/textiles/add">Add Textile</Link>
                    </li>
                    <li>
                        <Link href="/admin/events/create">Add Event</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
