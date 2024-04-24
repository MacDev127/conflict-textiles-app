import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useForm } from "@inertiajs/react";
import { Typography, Box, Select, MenuItem } from "@mui/material";
import "./UserRole.css";
const UserRole = ({ users, roles }) => {
    const { data, setData, post } = useForm({
        user_id: "",
        role_id: "",
    });

    const handleRoleChange = (userId, newRoleId) => {
        // Set data for POST request
        setData({ user_id: userId, role_id: newRoleId });
        console.log("Updating role:", userId, newRoleId);

        post("/admin/users/assign-role", {
            preserveState: true,

            onSuccess: () => {
                // Optionally reset form or provide feedback
                console.log("Role updated successfully");
            },
            onError: (errors) => {
                console.error("Error updating role", errors);
            },
        });
    };

    const columns = [
        { field: "id", headerName: "Id", width: 150 },
        { field: "name", headerName: "User", width: 150 },
        {
            field: "role",
            headerName: "Roles",
            width: 150,
            renderCell: (params) => (
                <Select
                    value={params.value || ""}
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

    const rows = users.map((user) => ({
        id: user.id,
        name: user.name,
        role_id: user.role_id,
        roles: user.roles,
    }));

    return (
        <>
            <Box
                sx={{
                    maxHeight: "1000px",
                    minWidth: "1200px",
                    marginTop: "100px",
                    width: "100%",
                    overflow: "hidden", // Ensures no scrollbars are visible by default
                    // Use media query to apply styles based on the screen width
                    "@media (max-width: 600px)": {
                        // Adjust '600px' to the breakpoint you need
                        "& .MuiDataGrid-virtualScroller.css-1793420-MuiDataGrid-virtualScroller":
                            {
                                overflowX: "auto",
                                maxWidth: "500px", // Enables horizontal scrolling for small screens
                                overflowY: "hidden", // Keeps vertical scrolling disabled
                                scrollbarWidth: "thin", // Keeps the scrollbar thin
                                "&::-webkit-scrollbar": {
                                    height: "10px", // Sets the scrollbar height
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "rgba(0, 0, 0, 0.2)", // Sets the scrollbar color
                                },
                            },
                    },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 4,
                        borderBottom: "solid",
                        borderBottomWidth: "2px",
                        borderBottomColor: "#ccc",
                        paddingBottom: "10px",
                    }}
                >
                    Manage User Roles
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
