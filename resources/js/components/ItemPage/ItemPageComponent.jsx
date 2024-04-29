// GenericItemPage.js
import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";

//styles
import { CollectionItemStyle } from "./itemPageComponent.styled";
import { ItemDescStyle } from "./itemPageComponent.styled";
import { ImageContainer } from "./itemPageComponent.styled";
import { SearchBarContainer } from "./itemPageComponent.styled";
import { Tooltip } from "@mui/material";
import "./itemPageComponent.css";

//icons
import BookmarkIcon from "@mui/icons-material/Bookmark";

//Components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import ContentComponent from "@/components/Content/ContentComponent";
import TextComponent from "@/components/Text/TextComponent";
import MasonryComponent from "@/components/Masonry/MasonryComponent";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";
import SearchComponent from "../Search/SearchComponent";
import AlertComponent from "@/components/Alert/AlertComponent";
import BreadcrumbComponent from "../Breadcrumbs/BreadcrumbComponent";

const ItemPageComponent = ({
    type,
    title,
    quoteText,
    imageUrl,
    description,
    galleryImages,
    countries,
    flash,
    auth,
}) => {
    //------------------flash message section that took hours to figure out---------------//

    // This section initializes and manages the alert system for displaying flash messages.
    // `flash?.message` checks if there is a flash message available, using optional chaining to avoid errors if `flash` is undefined.
    // The `useState` hooks initialize `alertMessage` and `severity`. If a flash message exists, `alertMessage` is set to that message,
    // and `severity` is set to "success". If no message is present, `severity` defaults to "info".
    // The `useEffect` hook listens for changes in the `flash` object. If `flash.message` changes (indicating a new message),
    // it updates `alertMessage` to the new message and sets `severity` to "success". This ensures the UI reflects current state,
    // displaying new flash messages as they occur.

    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("");

    // Assuming flash is an object with potential 'success' and 'error' properties
    useEffect(() => {
        if (flash?.success) {
            setAlertMessage(flash.success);
            setSeverity("success");
        } else if (flash?.error) {
            setAlertMessage(flash.error);
            setSeverity("error");
        }
    }, [flash]);

    //------------------flash message section that took hours to figure out---------------//

    const handleImageClick = (imageId) => {
        router.visit(`/textile-details/${imageId}`);
    };

    const handleAlertClose = () => {
        setAlertMessage("");
    };

    const handleBookmark = (imageId, e) => {
        e.preventDefault();
        e.stopPropagation();
        router.post(
            `/bookmark/${imageId}`,
            {},
            {
                preserveScroll: true,
                onSuccess: () => {
                    setAlertMessage("Bookmark added");
                    setSeverity("success");
                },
                onError: () => {
                    setAlertMessage("Bookmark already added!");
                    setSeverity("error");
                },
            }
        );
    };

    return (
        <section className={`${type}`}>
            <Navbar />
            <ImageHeaderComponent imageUrl={imageUrl} quoteText={quoteText} />
            <BreadcrumbComponent
                type={type}
                breadcrumbs={[
                    { label: "Collection", href: "/collection" },
                    {
                        label: type.charAt(0).toUpperCase() + type.slice(1),
                        href: "",
                    },
                ]}
            />
            <ContainerComponent>
                <TitleComponent>{title}</TitleComponent>
                <ContentComponent className="item-page__content">
                    <TextComponent>{description}</TextComponent>
                </ContentComponent>
                <SearchBarContainer>
                    <SearchComponent auth={auth} countries={countries} />
                </SearchBarContainer>
                <MasonryComponent
                    galleryImages={galleryImages}
                    onImageClick={handleImageClick}
                >
                    {galleryImages.map((image) => (
                        <CollectionItemStyle
                            className={`${type}__collection-item`}
                            key={image.id}
                            onClick={() => handleImageClick(image.id)}
                        >
                            <Link href={`/textile-details/${image.id}`}>
                                <ImageContainer>
                                    <img src={image.img} alt={image.title} />
                                    <div className="overlay"></div>
                                </ImageContainer>
                            </Link>

                            <ItemDescStyle className={`${type}__item-desc`}>
                                <h2>{image.title}</h2>
                                {auth.user &&
                                    auth.user &&
                                    auth.user.role_id === 3 && (
                                        <Tooltip title="Bookmark" arrow>
                                            <BookmarkIcon
                                                sx={{
                                                    color: "#3a3335",
                                                    fontSize: "18px",
                                                }}
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent the gallery image click handler from firing
                                                    handleBookmark(image.id, e);
                                                }}
                                            />
                                        </Tooltip>
                                    )}
                            </ItemDescStyle>
                        </CollectionItemStyle>
                    ))}
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
            </ContainerComponent>
            <Footer />
        </section>
    );
};

export default ItemPageComponent;
