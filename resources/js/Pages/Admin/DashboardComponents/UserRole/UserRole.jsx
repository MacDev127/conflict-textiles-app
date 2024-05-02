import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useForm } from "@inertiajs/react";
import { Typography, Box, Select, MenuItem } from "@mui/material";
import { MdAdd } from "react-icons/md";

import "./UserRole.css";

const UserRole = ({ users: initialUsers, roles, toggleForm, showForm }) => {
    const [users, setUsers] = useState(initialUsers); // State to manage users data

    const { setData, post } = useForm({
        user_id: "",
        role_id: "",
    });

    // Handle changing role
    const handleRoleChange = (userId, newRoleId) => {
        // Update local state first to reflect UI changes immediately
        const updatedUsers = users.map((user) => {
            if (user.id === userId) {
                return { ...user, role_id: newRoleId };
            }
            return user;
        });
        setUsers(updatedUsers);

        // Set data for POST request
        setData({ user_id: userId, role_id: newRoleId });

        // Make asynchronous request to update the role in the backend
        post("/admin/users/assign-role", {
            preserveState: true,
            onSuccess: () => console.log("Role updated successfully"),
            onError: (errors) => console.error("Error updating role", errors),
        });
    };

    // Columns for the DataGrid
    const columns = [
        { field: "id", headerName: "ID", width: 150, flex: 0, minWidth: 100 }, // Minimum width
        { field: "name", headerName: "User", flex: 1, minWidth: 150 }, // Flex grow
        {
            field: "role",
            headerName: "Role",
            flex: 1,
            minWidth: 150, // Ensures a minimum width for readability
            renderCell: (params) => (
                <Select
                    value={params.row.role_id}
                    onChange={(e) =>
                        handleRoleChange(params.id, e.target.value)
                    }
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {roles.map((role) => (
                        <MenuItem key={role.id} value={role.id}>
                            {role.name}
                        </MenuItem>
                    ))}
                </Select>
            ),
        },
    ];

    // Rows for the DataGrid
    const rows = users.map((user) => ({
        id: user.id,
        name: user.name,
        role_id: user.role_id, // Ensure this is being passed correctly
    }));

    return (
        <>
            <Box
                className="data-grid-container"
                sx={{
                    maxHeight: "1000px",
                    width: "100%", // Ensure it takes full width
                    overflow: "hidden",
                    mt: { xs: "20px", md: "100px" }, // Smaller top margin on smaller screens
                    minWidth: { md: "1000px" }, // No minimum width constraint on smaller screens
                    "& .MuiDataGrid-virtualScroller": {
                        overflowX: "auto",
                        "&::-webkit-scrollbar": {
                            height: "8px", // Smaller scrollbar height
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "rgba(0,0,0,0.3)",
                            },
                        },
                    },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 4,
                        borderBottom: "solid",
                        borderBottomWidth: "2px",
                        borderBottomColor: "#ccc",
                        paddingBottom: "10px",
                        "@media (max-width: 414px)": {
                            // Adjust '600px' to the breakpoint you need
                            fontSize: "20px",
                            paddingLeft: "60px",
                        },
                    }}
                >
                    Manage User Roles
                    <button
                        aria-label="open form"
                        className="show__button"
                        onClick={toggleForm}
                        variant="contained"
                        color="primary"
                    >
                        Create User
                        <MdAdd style={{ fontSize: "20px" }} />
                    </button>
                </Typography>

                <DataGrid
                    sx={{ backgroundColor: "#ccc" }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </Box>
        </>
    );
};

export default UserRole;
