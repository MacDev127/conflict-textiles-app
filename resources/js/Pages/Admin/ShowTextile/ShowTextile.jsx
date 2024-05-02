import React from "react";
import { Link } from "@inertiajs/react";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DashboardSidebar from "../DashboardComponents/DashboardSidebar/DashboardSidebar";
import { router } from "@inertiajs/react";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";

import "./ShowTextile.css";

const ShowTextiles = ({ textile }) => {
    const details = [
        { label: "Type", value: textile.type },
        { label: "Location", value: textile.location },
        { label: "Year Produced", value: textile.year_produced },
        { label: "Size", value: textile.size },
        { label: "Provenance", value: textile.provenance },
        { label: "Country of Origin", value: textile.country_of_origin },
        { label: "Maker", value: textile.maker },
        { label: "Authenticity", value: textile.authenticity },
        { label: "Materials", value: textile.materials },
        { label: "Photographer", value: textile.photgrapher },
        // Add other details as needed
    ];

    const handleDelete = () => {
        if (
            window.confirm(
                "Are you sure you want to delete this textile? This action cannot be undone."
            )
        ) {
            router.delete(route("textileDetail.destroy", { id: textile.id }), {
                onSuccess: () => {
                    router.visit(route("admin.textiles-dashboard"));
                },
            });
        }
    };

    return (
        <>
            <DashboardSidebar />
            <BreadcrumbComponent
                breadcrumbs={[
                    { label: "Dashboard", href: "/textiles-dashboard" },
                    {
                        label: "Textile Details",
                        href: "",
                    },
                ]}
            />
            <section className="show__textiles">
                <div className="textile-image-container">
                    {textile.image && (
                        <img
                            src={textile.image}
                            alt="Textile"
                            className="textile-image"
                        />
                    )}
                    <div className="show__textiles-icons">
                        <Link
                            href={route("admin.textileDetail.edit", {
                                id: textile.id,
                            })}
                            className="edit-link"
                        >
                            <Tooltip title="Edit" arrow>
                                <EditIcon
                                    sx={{
                                        color: "#df0144",
                                        marginRight: "8px",
                                    }}
                                />
                            </Tooltip>
                        </Link>
                        <Tooltip title="Delete" arrow>
                            <DeleteIcon
                                sx={{
                                    color: "#df0144",
                                    marginRight: "8px",
                                    cursor: "pointer",
                                }}
                                onClick={handleDelete}
                            />
                        </Tooltip>
                    </div>
                </div>
                <div className="textile-details">
                    <h1>{textile.title}</h1>
                    {details.map((detail, index) => (
                        <div key={index} className="detail">
                            <span>{detail.label}:</span> {detail.value}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ShowTextiles;
