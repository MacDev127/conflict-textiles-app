import React from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";
import { MdOutlinePlaylistAdd } from "react-icons/md";

import Tooltip from "@mui/material/Tooltip"; // import EditIcon from "@mui/icons-material/Edit";
import "./ListTextile.css";
import TextileDetail from "@/Pages/TextileDetails/TextileDetail";

const ListTextiles = ({ onToggleForm, textileDetail }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this event?")) {
            router.delete(route("event.destroy", id), {
                onSuccess: () => {},
            });
        }
    };
    // console.log(events);

    return (
        <div>
            <table>
                <caption>
                    Textile Details
                    <Tooltip title="Add Event" arrow>
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
                    {textileDetail.map((details) => (
                        <tr key={textileDetail.id} className="active-row">
                            <td>{textileDetail.title}</td>
                            <td>{textileDetail.type}</td>
                            <td title={textileDetail.location}>
                                {textileDetail.location}
                            </td>
                            <td>{textileDetail.size}</td>
                            <td>{textileDetail.materials}</td>
                            <td>{textileDetail.provenance}</td>
                            <td>{textileDetail.country_of_origin}</td>
                            <td>{textileDetail.authenticity}</td>
                            <td>{textileDetail.maker}</td>
                            <td>{textileDetail.owner}</td>
                            <td>{textileDetail.photographer}</td>
                            <td title={textileDetail.image}>
                                {textileDetail.image}
                            </td>
                            <td title={textileDetail.description}>
                                {textileDetail.description}
                            </td>

                            <td className="table-icons">
                                <Link
                                // href={route("admin.events.edit", textileDetail.id)}
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
                                        onClick={() => handleDelete(event.id)}
                                        sx={{
                                            fontSize: "16px",
                                        }}
                                    >
                                        <FaTrashCan
                                            style={{ color: "crimson" }}
                                        />
                                    </IconButton>
                                </Tooltip>
                                {/* <button onClick={() => handleDelete(event.id)}>
                                    <FaTrashCan />
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListTextiles;
