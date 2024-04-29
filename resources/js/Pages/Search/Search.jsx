import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";

//Components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import MasonryComponent from "@/components/Masonry/MasonryComponent";
import { CollectionItemStyle } from "./Search.styled";
import { ImageContainer } from "./Search.styled";
import { ItemDescStyle } from "./Search.styled";
import { SearchBarContainer } from "./Search.styled";
import AlertComponent from "@/components/Alert/AlertComponent";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";
import SearchComponent from "@/components/Search/SearchComponent";

import "./Search.css";

const Search = ({ galleryImages, type, countries, auth, authUser }) => {
    const handleImageClick = (imageId) => {
        router.visit(`/textile-details/${imageId}`);
    };

    // ----------Results error-------//

    const [alertMessage, setAlertMessage] = useState("");
    const [severity, setSeverity] = useState("error");

    const handleAlertClose = () => {
        setAlertMessage("");
    };

    const hasImages = galleryImages && galleryImages.length > 0;

    useEffect(() => {
        if (!hasImages) {
            setAlertMessage("No Results Found");
            setSeverity("error");
        }
    }, [hasImages]);

    // -----Results error-------//

    return (
        <>
            <Navbar authUser={authUser} />
            <BreadcrumbComponent
                breadcrumbs={[
                    { label: "Collection", href: "/collection" },
                    { label: "Search Results", href: "/search" },
                ]}
            />
            <ContainerComponent>
                <TitleComponent className=" search__title">
                    Search Results
                </TitleComponent>
                <SearchBarContainer>
                    <SearchComponent
                        auth={auth}
                        countries={countries}
                        type={type}
                    />
                </SearchBarContainer>

                {hasImages ? (
                    <MasonryComponent
                        className="search-masonry"
                        galleryImages={galleryImages}
                    >
                        {galleryImages.map((image) => (
                            <CollectionItemStyle
                                key={image.id}
                                onClick={() => handleImageClick(image.id)}
                            >
                                <Link href={`/textile-details/${image.id}`}>
                                    <ImageContainer>
                                        <img src={image.img} />
                                        <div className="overlay"></div>
                                    </ImageContainer>
                                </Link>
                                <ItemDescStyle className={`${type}__item-desc`}>
                                    <h2>{image.title}</h2>
                                </ItemDescStyle>
                            </CollectionItemStyle>
                        ))}
                    </MasonryComponent>
                ) : (
                    <div className="search__error">
                        {alertMessage && (
                            <AlertComponent
                                className="alert__component"
                                severity={severity}
                                closeHandler={handleAlertClose}
                            >
                                {alertMessage}
                            </AlertComponent>
                        )}
                    </div>
                )}
            </ContainerComponent>

            <Footer />
        </>
    );
};

export default Search;
