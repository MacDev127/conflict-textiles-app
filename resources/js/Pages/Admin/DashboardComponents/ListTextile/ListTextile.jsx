import React from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";
import { MdOutlinePlaylistAdd } from "react-icons/md";

import Tooltip from "@mui/material/Tooltip";
import "./ListTextile.css";

const ListTextiles = ({ onToggleForm, galleryImages }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this event?")) {
            router.delete(route("textileDetail.destroy", id), {
                onSuccess: () => {},
            });
        }
    };

    // console.log(galleryImages);

    return (
        <table>
            <caption>
                Textile Details
                <Tooltip title="Add Textile" arrow>
                    <IconButton
                        onClick={onToggleForm}
                        aria-label="Add new textile"
                        sx={{
                            fontSize: "16px",
                            position: "absolute",
                            top: "14px",
                            right: "0",
                            color: "white",
                        }}
                    >
                        <MdOutlinePlaylistAdd style={{ fontSize: "30px" }} />
                    </IconButton>
                </Tooltip>
            </caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Size</th>
                    <th>Materials</th>
                    <th>Provenance</th>
                    <th>Country of Origin</th>
                    <th>Authenticity</th>
                    <th>Maker</th>
                    <th>Owner</th>
                    <th>Photographer</th>
                    <th>Image</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {galleryImages.map((image) => (
                    <tr key={image.id} className="active-row">
                        <td title={image.title}>{image.title}</td>
                        <td>{image.type}</td>
                        <td title={image.location}>{image.location}</td>
                        <td>{image.size}</td>
                        <td>{image.materials}</td>
                        <td>{image.provenance}</td>
                        <td>{image.country_of_origin}</td>
                        <td>{image.authenticity}</td>
                        <td>{image.maker}</td>
                        <td>{image.owner}</td>
                        <td>{image.photographer}</td>
                        <td title={image.image}>{image.image}</td>
                        <td title={image.description}>{image.description}</td>

                        <td className="table-icons">
                            <Link
                                href={route(
                                    "admin.textileDetail.edit",
                                    image.id
                                )}
                            >
                                <Tooltip title="Edit" arrow>
                                    <IconButton
                                        aria-label="Edit textile"
                                        sx={{
                                            fontSize: "16px",
                                        }}
                                    >
                                        <FaPen />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                            <Tooltip title="Delete" arrow>
                                <IconButton
                                    aria-label="Delete textile"
                                    onClick={() => handleDelete(image.id)}
                                    sx={{
                                        fontSize: "16px",
                                    }}
                                >
                                    <FaTrashCan style={{ color: "crimson" }} />
                                </IconButton>
                            </Tooltip>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListTextiles;
