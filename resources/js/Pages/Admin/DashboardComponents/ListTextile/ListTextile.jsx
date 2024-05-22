import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { Tooltip } from "@mui/material";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { MdAdd } from "react-icons/md";
import VisibilityIcon from "@mui/icons-material/Visibility";

import "./ListTextile.css";

const ListTextiles = ({ galleryImages, toggleForm }) => {
    // Define columns for DataGrid
    const columns = [
        // {
        //     field: "id",
        //     headerName: "ID",
        //     width: 30,
        //     headerClassName: "table-header",
        // },
        // {
        //     field: "image",
        //     headerName: "Image",
        //     width: 110,
        //     headerClassName: "table-header",
        // },
        {
            field: "title",
            headerName: "Title",
            width: 150,
            headerClassName: "table-header",
        },
        {
            field: "type",
            headerName: "Type",
            width: 150,
            headerClassName: "table-header",
        },
        {
            field: "location",
            headerName: "Location",
            width: 150,
            headerClassName: "table-header",
        },
        // {
        //     field: "photographer",
        //     headerName: "Photographer",
        //     width: 150,
        //     headerClassName: "table-header",
        // },
        // {
        //     field: "year_produced",
        //     headerName: "Year Produced",
        //     width: 150,
        //     headerClassName: "table-header",
        // },
        // {
        //     field: "size",
        //     headerName: "Size",
        //     width: 150,
        //     headerClassName: "table-header",
        // },
        // {
        //     field: "materials",
        //     headerName: "Materials",
        //     width: 150,
        //     headerClassName: "table-header",
        // },
        // {
        //     field: "provenance",
        //     headerName: "Provenance",
        //     width: 150,
        //     headerClassName: "table-header",
        // },
        {
            field: "country_of_origin",
            headerName: "Country of Origin",
            width: 150,
            headerClassName: "table-header",
        },
        {
            field: "authenticity",
            headerName: "Authenticity",
            width: 150,
            headerClassName: "table-header",
        },
        {
            field: "maker",
            headerName: "Maker",
            width: 150,
            headerClassName: "table-header",
        },
        {
            field: "owner",
            headerName: "Owner",
            width: 150,
            headerClassName: "table-header",
        },
        // {
        //     field: "description",
        //     headerName: "Description",
        //     width: 110,
        //     headerClassName: "table-header",
        // },
        {
            field: "actions",
            headerName: "Actions",
            headerClassName: "table-header",
            width: 150,

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
                        <div className="actions__container">
                            <Link
                                href={route(
                                    "admin.textileDetail.edit",
                                    params.id
                                )}
                            >
                                <Tooltip title="Edit" arrow>
                                    <EditIcon
                                        sx={{
                                            color: "#df0144",
                                        }}
                                        aria-label="Edit textile"
                                    >
                                        {/* <FaPen /> */}
                                    </EditIcon>
                                </Tooltip>
                            </Link>
                            <Tooltip title="Delete" arrow>
                                <DeleteIcon
                                    sx={{ color: "#df0144", cursor: "pointer" }}
                                    aria-label="Delete textile"
                                    onClick={handleDelete}
                                ></DeleteIcon>
                            </Tooltip>
                            <Tooltip title="View Details">
                                <Link
                                    href={route(
                                        "admin.textiles.details",
                                        params.id
                                    )}
                                >
                                    <VisibilityIcon sx={{ color: "#df0144" }} />
                                </Link>
                            </Tooltip>
                        </div>
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
                    // minheight: 300,
                    maxWidth: "1200px",
                    marginTop: "100px",
                    width: "100%",
                    overflow: "hidden",
                    "@media (max-width: 768px)": {
                        "& .MuiDataGrid-virtualScroller.css-1793420-MuiDataGrid-virtualScroller":
                            {
                                overflowX: "auto",
                                maxWidth: "900px",
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
                        borderBottom: "1px solid #ccc",
                        marginBottom: "20px",
                        paddingBottom: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                    variant="h4"
                >
                    Textile Details
                    <button
                        aria-label="open form"
                        className="show__button"
                        onClick={toggleForm}
                        variant="contained"
                        color="primary"
                    >
                        Add Textile
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

export default ListTextiles;
