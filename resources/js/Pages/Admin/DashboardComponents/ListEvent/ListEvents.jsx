import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { Tooltip } from "@mui/material";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";

const ListEvents = ({ events }) => {
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 30,
            headerClassName: "table-header",
        },
        { field: "title", headerName: "Title", width: 110 },
        { field: "type", headerName: "Type", width: 110 },
        { field: "location", headerName: "Location", width: 110 },
        { field: "event_date", headerName: "Date", width: 110 },
        { field: "event_time", headerName: "Time", width: 110 },
        { field: "venue", headerName: "Venue", width: 110 },
        { field: "curator", headerName: "Curator", width: 110 },
        { field: "facilitator", headerName: "Facilitator", width: 110 },
        { field: "commissioned_by", headerName: "Commissioned By", width: 110 },
        { field: "document_url", headerName: "Document Url", width: 110 },
        { field: "textile_url", headerName: "Textile_url", width: 110 },
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
                                        marginRight: "10px",
                                    }}
                                    aria-label="Edit Event"
                                >
                                    {/* <FaPen /> */}
                                </EditIcon>
                            </Tooltip>
                        </Link>
                        <Tooltip title="Delete" arrow>
                            <DeleteIcon
                                sx={{ color: "#df0144" }}
                                aria-label="Delete Event"
                                onClick={handleDelete}
                            >
                                {/* <FaTrashCan style={{ color: "crimson" }} /> */}
                            </DeleteIcon>
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
                    minHeight: "1000px",
                    maxWidth: "1700px",
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
                    sx={{
                        borderBottom: "1px solid #ccc",
                        marginBottom: "20px",
                        paddingBottom: "10px",
                        fontSize: "40px",
                    }}
                    variant="h4"
                >
                    Event Details
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
