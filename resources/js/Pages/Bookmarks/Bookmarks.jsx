import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import TitleComponent from "@/components/Title/TitleComponent";
import Footer from "@/components/Footer/Footer";
import MasonryComponent from "@/components/Masonry/MasonryComponent";
import "./Bookmarks.css";
import { router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import PageTitleComponent from "@/components/PageTitle/PageTitleComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AlertComponent from "@/components/Alert/AlertComponent";
import { Tooltip } from "@mui/material";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";

const Bookmarks = ({ authUser, bookmarks, galleryImages, auth, type }) => {
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
        <section className="Bookmarks">
            <Navbar authUser={authUser} auth={auth} />
            <BreadcrumbComponent
                type={type}
                breadcrumbs={[
                    { label: "Home", href: "/" },

                    { label: "Bookmarks", href: "" },
                ]}
            />

            <div className="bookmark-gallery">
                <PageTitleComponent className="page__title">
                    Bookmarked Items
                </PageTitleComponent>
                <MasonryComponent
                    galleryImages={bookmarks.map(
                        (bookmark) => bookmark.galleryImage
                    )}
                    onImageClick={handleImageClick}
                >
                    {bookmarks.map((bookmark) => {
                        const galleryImage =
                            bookmark.galleryImage || bookmark.gallery_image; // Fallback if different naming conventions are used.

                        return (
                            <div key={bookmark.id} className="bookmark-item">
                                {galleryImage ? (
                                    <div className="bookmark__container">
                                        <div className="bookmark__image-container">
                                            <img
                                                src={`/storage/${galleryImage.image}`} // Assuming you store just the filename in the database
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
            <Footer />
        </section>
    );
};

export default Bookmarks;
