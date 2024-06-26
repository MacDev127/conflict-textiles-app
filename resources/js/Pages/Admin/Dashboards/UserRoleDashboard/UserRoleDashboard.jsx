import React, { useState } from "react";
import "./UserRoleDashboard.css";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import UserRole from "../../DashboardComponents/UserRole/UserRole";
import CreateRole from "../../DashboardComponents/CreateUser/CreateUser";
import { CSSTransition } from "react-transition-group";

const UserRoleDashboard = ({ users, authUser, roles }) => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <DashboardSidebar authUser={authUser} />
            <section className="user-role__dashboard">
                <div className="user-role__dashboard-container">
                    <UserRole
                        users={users}
                        roles={roles}
                        showForm={showForm}
                        toggleForm={toggleForm}
                    />

                    <CSSTransition
                        in={showForm}
                        timeout={300}
                        classNames="form"
                        unmountOnExit
                    >
                        <CreateRole />
                    </CSSTransition>
                </div>
            </section>
        </>
    );
};

export default UserRoleDashboard;
