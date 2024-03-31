import React from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";
import { MdOutlinePlaylistAdd } from "react-icons/md";

import Tooltip from "@mui/material/Tooltip"; // import EditIcon from "@mui/icons-material/Edit";
import "./ListTextile.css";

const ListTextiles = ({ onToggleForm, textileDetail }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this event?")) {
            router.delete(route("textileDetail.destroy", id), {
                onSuccess: () => {},
            });
        }
    };

    return (
        <div>
            <table>
                <caption>
                    Textile Details
                    <Tooltip title="Add Textile" arrow>
                        <IconButton
                            onClick={onToggleForm}
                            sx={{
                                fontSize: "16px",
                                position: "absolute",
                                top: "14px",
                                right: "0",
                                color: "white",
                            }}
                        >
                            <MdOutlinePlaylistAdd
                                style={{ fontSize: "30px" }}
                            />
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
                    {textileDetail.map((detail) => (
                        <tr key={detail.id} className="active-row">
                            <td>{detail.title}</td>
                            <td>{detail.type}</td>
                            <td title={detail.location}>{detail.location}</td>
                            <td>{detail.size}</td>
                            <td>{detail.materials}</td>
                            <td>{detail.provenance}</td>
                            <td>{detail.country_of_origin}</td>
                            <td>{detail.authenticity}</td>
                            <td>{detail.maker}</td>
                            <td>{detail.owner}</td>
                            <td>{detail.photographer}</td>
                            <td title={detail.image}>{detail.image}</td>
                            <td title={detail.description}>
                                {detail.description}
                            </td>

                            <td className="table-icons">
                                <Link
                                    href={route(
                                        "admin.textileDetail.edit",
                                        detail.id
                                    )}
                                >
                                    <Tooltip title="Edit" arrow>
                                        <IconButton
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
                                        onClick={() => handleDelete(detail.id)}
                                        sx={{
                                            fontSize: "16px",
                                        }}
                                    >
                                        <FaTrashCan
                                            style={{ color: "crimson" }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListTextiles;
