import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { Tooltip } from "@mui/material";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";

import "./ListTextile.css";

const ListTextiles = ({ galleryImages }) => {
    // Define columns for DataGrid
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 30,
            headerClassName: "table-header",
        },
        {
            field: "image",
            headerName: "Image",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "title",
            headerName: "Title",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "type",
            headerName: "Type",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "location",
            headerName: "Location",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "photographer",
            headerName: "Photographer",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "year_produced",
            headerName: "Year Produced",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "size",
            headerName: "Size",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "materials",
            headerName: "Materials",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "provenance",
            headerName: "Provenance",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "country_of_origin",
            headerName: "Country of Origin",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "authenticity",
            headerName: "Authenticity",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "maker",
            headerName: "Maker",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "owner",
            headerName: "Owner",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "description",
            headerName: "Description",
            width: 110,
            headerClassName: "table-header",
        },
        {
            field: "actions",
            headerName: "Actions",
            headerClassName: "table-header",

            sortable: false,
            renderCell: (params) => {
                const handleDelete = () => {
                    if (
                        window.confirm(
                            "Are you sure you want to delete this textile?"
                        )
                    ) {
                        router.delete(
                            route("textileDetail.destroy", params.id),
                            {
                                onSuccess: () => {
                                    setRows((prevRows) =>
                                        prevRows.filter(
                                            (row) => row.id !== params.id
                                        )
                                    );
                                },
                            }
                        );
                    }
                };
                return (
                    <>
                        <Link
                            href={route("admin.textileDetail.edit", params.id)}
                        >
                            <Tooltip title="Edit" arrow>
                                <EditIcon
                                    sx={{
                                        color: "#df0144",
                                        marginRight: "10px",
                                    }}
                                    aria-label="Edit textile"
                                >
                                    {/* <FaPen /> */}
                                </EditIcon>
                            </Tooltip>
                        </Link>
                        <Tooltip title="Delete" arrow>
                            <DeleteIcon
                                sx={{ color: "#df0144" }}
                                aria-label="Delete textile"
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

    // State to manage rows
    const [rows, setRows] = useState([]);

    // Convert galleryImages to rows format for DataGrid
    useEffect(() => {
        setRows(
            galleryImages.map((image) => ({
                id: image.id,
                image: image.image,
                title: image.title,
                type: image.type,
                location: image.location,
                photographer: image.photographer,
                year_produced: image.year_produced,
                size: image.size,
                materials: image.materials,
                provenance: image.provenance,
                country_of_origin: image.country_of_origin,
                authenticity: image.authenticity,
                maker: image.maker,
                owner: image.owner,
                description: image.description,

                // Map other fields as necessary
            }))
        );
    }, [galleryImages]);

    return (
        <>
            <Box
                sx={{
                    height: 700,
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
                    }}
                    variant="h4"
                >
                    Textile Details
                </Typography>

                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10]}
                />
            </Box>
        </>
    );
};

export default ListTextiles;
