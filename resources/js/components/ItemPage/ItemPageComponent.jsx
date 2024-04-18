// GenericItemPage.js
import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";

//Components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import ContentComponent from "@/components/Content/ContentComponent";
import TextComponent from "@/components/Text/TextComponent";
import MasonryComponent from "@/components/Masonry/MasonryComponent";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";
import ReturnLinkComponent from "../Return/ReturnLinkComponent";
import SearchComponent from "../Search/SearchComponent";
import { CollectionItemStyle } from "./itemPageComponent.styled";
import { ItemDescStyle } from "./itemPageComponent.styled";
import { ImageContainer } from "./itemPageComponent.styled";
import { SearchBarContainer } from "./itemPageComponent.styled";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Tooltip } from "@mui/material";
import AlertComponent from "@/components/Alert/AlertComponent";

import "./itemPageComponent.css";

const ItemPageComponent = ({
    type,
    title,
    quoteText,
    imageUrl,
    description,
    galleryImages,
    countries,
}) => {
    const handleImageClick = (imageId) => {
        router.visit(`/textile-details/${imageId}`);
    };

    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("success");

    const handleAlertClose = () => {
        setAlertMessage("");
    };

    const handleBookmark = (imageId) => {
        console.log("Bookmark success");

        e.preventDefault();
        // This function will send a POST request to the bookmark route
        router.post(`/bookmark/${imageId}`, {
            onSuccess: () => {
                setAlertMessage("Bookmark added");
                setSeverity("success");
            },
            onError: () => {
                setAlertMessage("Bookmark already added!");
                setSeverity("error");
            },
        });
    };

    // console.log(countries);

    return (
        <section className={`${type}`}>
            <Navbar />
            <ImageHeaderComponent imageUrl={imageUrl} quoteText={quoteText} />
            <ContainerComponent>
                <TitleComponent>{title}</TitleComponent>
                <ContentComponent className="item-page__content">
                    <TextComponent>{description}</TextComponent>
                </ContentComponent>
                <SearchBarContainer>
                    <SearchComponent countries={countries} />
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
                            {/* //test */}

                            {/* test */}
                            <Link href={`/textile-details/${image.id}`}>
                                <ImageContainer>
                                    <img src={image.img} alt={image.title} />
                                    <div className="overlay"></div>
                                </ImageContainer>
                            </Link>

                            <ItemDescStyle className={`${type}__item-desc`}>
                                <h2>{image.title}</h2>
                                <Tooltip title="Bookmark" arrow>
                                    <BookmarkIcon
                                        sx={{
                                            color: "#3a3335",
                                            fontSize: "18px",
                                        }}
                                        style={{ cursor: "pointer" }}
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent the gallery image click handler from firing
                                            handleBookmark(image.id, e);
                                        }}
                                    />
                                </Tooltip>
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
                <ReturnLinkComponent to="/collection">
                    Back to Collection
                </ReturnLinkComponent>
            </ContainerComponent>
            <Footer />
        </section>
    );
};

export default ItemPageComponent;
