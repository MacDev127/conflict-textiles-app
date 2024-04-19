import React, { useState } from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import MasonryComponent from "@/components/Masonry/MasonryComponent";
import "./ResearchDashboard.css";
import { router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import PageTitleComponent from "@/components/PageTitle/PageTitleComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AlertComponent from "@/components/Alert/AlertComponent";
import { Tooltip } from "@mui/material";

const ResearchDashboard = ({ bookmarks, galleryImages }) => {
    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const handleAlertClose = () => {
        setAlertMessage("");
    };
    const handleImageClick = (imageId) => {
        router.visit(`/textile-details/${imageId}`);
    };

    const handleDeleteBookmark = (bookmarkId) => {
        router.delete(`/delete-bookmark/${bookmarkId}`, {
            onSuccess: () => {
                setAlertMessage("Bookmark Removed!");
                setSeverity("success");
            },
            onError: (errors) => {
                setAlertMessage("Failed to delete the bookmark.");
                setSeverity("error");
            },
        });
    };

    return (
        <>
            <DashboardSidebar
                menuItems={{
                    dashboard: false,
                    events: false,
                    textiles: false,
                    home: true,
                    bookmarks: true,
                }}
            />
            <div className="bookmark-gallery">
                <PageTitleComponent className="page__title">
                    Bookmarked Items
                </PageTitleComponent>
                <MasonryComponent
                    galleryImages={galleryImages}
                    onImageClick={handleImageClick}
                >
                    {bookmarks.map((bookmark) => {
                        const galleryImage = bookmark.gallery_image;

                        return (
                            <div key={bookmark.id} className="bookmark-item">
                                {galleryImage ? (
                                    <div className="bookmark__container">
                                        <div className="bookmark__image-container">
                                            <img
                                                src={galleryImage.image}
                                                alt={galleryImage.title}
                                            />
                                            <div className="image__overlay"></div>
                                        </div>
                                        <div className="bookmark__text-container">
                                            <p className="bookmark__title">
                                                {galleryImage.title}
                                            </p>
                                            <div className="bookmark__icons">
                                                <Tooltip
                                                    title="View Details"
                                                    arrow
                                                >
                                                    <Link
                                                        href={`/textile-details/${galleryImage.id}`}
                                                    >
                                                        <ImageSearchIcon
                                                            sx={{
                                                                cursor: "pointer",
                                                                color: "#3a3335",
                                                            }}
                                                            onClick={() =>
                                                                handleDeleteBookmark(
                                                                    bookmark.id
                                                                )
                                                            }
                                                            aria-label="View Details"
                                                        />
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip
                                                    title="Delete bookmark"
                                                    arrow
                                                >
                                                    <DeleteIcon
                                                        sx={{
                                                            cursor: "pointer",
                                                            marginLeft: "10px",
                                                            color: "#3a3335",
                                                        }}
                                                        onClick={() =>
                                                            handleDeleteBookmark(
                                                                bookmark.id
                                                            )
                                                        }
                                                        aria-label="Delete Bookmark"
                                                    />
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <p>This bookmark has no image.</p>
                                )}
                            </div>
                        );
                    })}
                </MasonryComponent>
                <div className="form__alert">
                    {alertMessage && (
                        <AlertComponent
                            variant="outlined"
                            severity={severity}
                            closeHandler={handleAlertClose}
                        >
                            {alertMessage}
                        </AlertComponent>
                    )}
                </div>
            </div>
        </>
    );
};

export default ResearchDashboard;
