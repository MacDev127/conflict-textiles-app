import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { Tooltip } from "@mui/material";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import { MdAdd } from "react-icons/md";
import "./ListEvents.css";

const ListEvents = ({ events, toggleForm }) => {
    const columns = [
        // {
        //     field: "id",
        //     headerName: "ID",
        //     width: 30,
        //     headerClassName: "table-header",
        // },
        { field: "title", headerName: "Title", width: 130 },
        { field: "type", headerName: "Type", width: 120 },
        { field: "location", headerName: "Location", width: 120 },
        { field: "event_date", headerName: "Date", width: 120 },
        { field: "event_time", headerName: "Time", width: 120 },
        { field: "venue", headerName: "Venue", width: 120 },
        // { field: "curator", headerName: "Curator", width: 120 },
        // { field: "facilitator", headerName: "Facilitator", width: 120 },
        // { field: "commissioned_by", headerName: "Commissioned By", width: 120 },
        // { field: "document_url", headerName: "Document Url", width: 110 },
        // { field: "textile_url", headerName: "Textile_url", width: 110 },
        { field: "image", headerName: "Image", width: 110 },
        { field: "outcome", headerName: "Outcome", width: 110 },
        { field: "description", headerName: "Description", width: 110 },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            renderCell: (params) => {
                const handleDelete = () => {
                    if (
                        window.confirm(
                            "Are you sure you want to delete this event?"
                        )
                    ) {
                        router.delete(route("event.destroy", params.id), {
                            onSuccess: () => {
                                setRows((prevRows) =>
                                    prevRows.filter(
                                        (row) => row.id !== params.id
                                    )
                                );
                            },
                        });
                    }
                };
                return (
                    <>
                        <Link href={route("admin.events.edit", params.id)}>
                            <Tooltip title="Edit" arrow>
                                <EditIcon
                                    sx={{
                                        color: "#df0144",
                                        marginRight: "8px",
                                    }}
                                    aria-label="Edit Event"
                                >
                                    {/* <FaPen /> */}
                                </EditIcon>
                            </Tooltip>
                        </Link>
                        <Tooltip title="Delete" arrow>
                            <DeleteIcon
                                sx={{ color: "#df0144", marginRight: "8px" }}
                                aria-label="Delete Event"
                                onClick={handleDelete}
                            ></DeleteIcon>
                        </Tooltip>
                        <Tooltip title="View Details">
                            <Link
                                href={route("admin.events.details", {
                                    id: params.id,
                                })}
                            >
                                <VisibilityIcon
                                    sx={{
                                        color: "#df0144",
                                        marginRight: "10px",
                                    }}
                                />
                            </Link>
                        </Tooltip>
                    </>
                );
            },
            width: 160,
        },
    ];

    // Convert events to rows format for DataGrid
    const [rows, setRows] = useState(
        events.map((event) => ({
            id: event.id,
            title: event.title,
            type: event.type,
            location: event.location,
            event_date: event.event_date,
            event_time: event.event_time,
            venue: event.venue,
            curator: event.curator,
            facilitator: event.facilitator,
            commissioned_by: event.commissioned_by,
            document_url: event.document_url,
            textile_url: event.textile_url,
            image: event.image,
            outcome: event.outcome,
            description: event.description,

            actions: "", // Actions column, needed for DataGrid but populated by renderCell
        }))
    );

    return (
        <>
            <Box
                sx={{
                    maxWidth: "1200px",
                    marginTop: "100px",
                    width: "100%",
                    overflow: "hidden",
                    "@media (max-width: 800px)": {
                        "& .MuiDataGrid-virtualScroller.css-1793420-MuiDataGrid-virtualScroller":
                            {
                                overflowX: "auto",
                                maxWidth: "500px",
                                overflowY: "hidden",
                                scrollbarWidth: "thin",
                                "&::-webkit-scrollbar": {
                                    height: "10px",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                },
                            },
                    },
                    "@media (max-width: 414px)": {
                        "& .MuiDataGrid-virtualScroller.css-1793420-MuiDataGrid-virtualScroller":
                            {
                                overflowX: "auto",
                                maxWidth: "400px",
                                overflowY: "hidden",
                                scrollbarWidth: "thin",
                                "&::-webkit-scrollbar": {
                                    height: "10px",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                },
                            },
                    },
                }}
            >
                <Typography
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #ccc",
                        marginBottom: "20px",
                        paddingBottom: "10px",
                        fontSize: "40px",
                        "@media (max-width: 600px)": {
                            fontSize: "30px",
                            marginX: "10px",
                        },
                        "@media (max-width: 414px)": {
                            fontSize: "30px",
                        },
                    }}
                    variant="h4"
                >
                    Event Details
                    <button
                        aria-label="open form"
                        className="show__button"
                        onClick={toggleForm}
                        variant="contained"
                        color="primary"
                    >
                        Add Event
                        <MdAdd style={{ fontSize: "20px" }} />
                    </button>
                </Typography>

                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    rowsPerPageOptions={[5, 10]}
                    pageSizeOptions={[10, 25, { value: 100, label: "100" }]}
                />
            </Box>
        </>
    );
};

export default ListEvents;
