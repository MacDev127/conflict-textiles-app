import React, { useState } from "react";
import "./UserRoleDashboard.css";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import UserRole from "../../DashboardComponents/UserRole/UserRole";
import CreateRole from "../../DashboardComponents/CreateUser/CreateUser";

const UserRoleDashboard = ({ users, roles }) => {
    return (
        <>
            <DashboardSidebar
                menuItems={{
                    dashboard: false,
                    events: false,
                    textiles: false,
                    home: true,
                    bookmarks: true,
                    roles: true,
                }}
            />
            <section className="user-role__dashboard">
                <div className="user-role__dashboard-container">
                    <UserRole users={users} roles={roles} />
                    <CreateRole />
                </div>
            </section>
        </>
    );
};

export default UserRoleDashboard;
