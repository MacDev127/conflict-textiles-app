import React, { useState } from "react";
import DashboardSidebar from "../../DashboardComponents/DashboardSidebar/DashboardSidebar";
import MasonryComponent from "@/components/Masonry/MasonryComponent";
import "./ResearchDashboard.css";
import { router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import PageTitleComponent from "@/components/PageTitle/PageTitleComponent";
import { FaRegTrashCan } from "react-icons/fa6";
import AlertComponent from "@/components/Alert/AlertComponent";

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
                reset();
                setAlertMessage("Textile Added Successfully!");
                setSeverity("success");
            },
        });
    };

    return (
        <>
            <DashboardSidebar />
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
                                        <Link
                                            href={`/textile-details/${galleryImage.id}`}
                                        >
                                            <div className="bookmark__image-container">
                                                <img
                                                    src={galleryImage.image}
                                                    alt={galleryImage.title}
                                                />
                                                <div className="image__overlay"></div>
                                            </div>
                                        </Link>

                                        <div className="bookmark__text-container">
                                            <p className="bookmark__title">
                                                {galleryImage.title}
                                            </p>
                                            <FaRegTrashCan
                                                onClick={() =>
                                                    handleDeleteBookmark(
                                                        bookmark.id
                                                    )
                                                }
                                                aria-label="Delete Bookmark"
                                            />
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
