// GenericItemPage.js
import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";

//styles
import { CollectionItemStyle } from "./itemPageComponent.styled";
import { ItemDescStyle } from "./itemPageComponent.styled";
import { ImageContainer } from "./itemPageComponent.styled";
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
import BreadcrumbComponent from "../Breadcrumbs/BreadcrumbComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

const ItemPageComponent = ({
    type,
    title,
    quoteText,
    imageUrl,
    description,
    galleryImages,
    onPaginationChange, // Function to handle page changes
    paginationData, // Object containing pagination details
    auth,
    authUser,
}) => {
    // Pagination component is conditionally rendered
    const renderPagination = () => {
        if (paginationData && paginationData.totalPages > 1) {
            return (
                <PaginationComponent
                    total={paginationData.lastPage}
                    current={paginationData.currentPage}
                    onChange={onPaginationChange}
                />
            );
        }
        return null;
    };

    // Access props from the usePage hook
    const { props } = usePage();

    // Initialize a state variable with a unique set of bookmarked items from props.
    const [bookmarkedItems, setBookmarkedItems] = useState(
        new Set(props.bookmarkedItems)
    );

    const handleToggleBookmark = (imageId) => {
        // Create a new Set from the existing bookmarked items to prevent duplicates
        const updatedBookmarks = new Set(bookmarkedItems);

        // Directly toggle the presence of the imageId in the set
        if (updatedBookmarks.has(imageId)) {
            updatedBookmarks.delete(imageId);
        } else {
            updatedBookmarks.add(imageId);
        }

        // Update the state with the new set of bookmarks
        setBookmarkedItems(updatedBookmarks);

        // Post the update to the server
        router.post(
            `/toggle-bookmark/${imageId}`,
            { bookmarked: !updatedBookmarks.has(imageId) },
            { preserveState: true, preventScroll: true }
        );
    };

    return (
        <section className={type}>
            <Navbar authUser={authUser} auth={auth} />
            <ImageHeaderComponent imageUrl={imageUrl} quoteText={quoteText} />
            <BreadcrumbComponent
                type={type}
                breadcrumbs={[
                    { label: "Collection", href: "/collection" },
                    { label: title, href: "" },
                ]}
            />
            <ContainerComponent>
                <TitleComponent>{title}</TitleComponent>
                <ContentComponent>
                    <TextComponent>{description}</TextComponent>
                </ContentComponent>
                <MasonryComponent
                    galleryImages={galleryImages.data}
                    onImageClick={(imageId) => handleToggleBookmark(imageId)}
                >
                    {galleryImages.data.map((image) => (
                        <CollectionItemStyle key={image.id}>
                            <Link
                                href={`/textile-details/${image.id}`}
                                data={{ referrer: window.location.pathname }}
                            >
                                <ImageContainer>
                                    <img src={image.img} alt={image.title} />
                                    <div className="overlay"></div>
                                </ImageContainer>
                            </Link>
                            <ItemDescStyle>
                                <h2>{image.title}</h2>
                                {auth.user &&
                                    auth.user &&
                                    auth.user.role_id === 3 && (
                                        <Tooltip title="Toggle Bookmark" arrow>
                                            <BookmarkIcon
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleToggleBookmark(
                                                        image.id
                                                    );
                                                }}
                                                style={{
                                                    cursor: "pointer",
                                                    color: bookmarkedItems.has(
                                                        image.id
                                                    )
                                                        ? "#df0144"
                                                        : "gray",
                                                }}
                                            />
                                        </Tooltip>
                                    )}
                            </ItemDescStyle>
                        </CollectionItemStyle>
                    ))}
                </MasonryComponent>
                <PaginationComponent
                    total={paginationData.lastPage}
                    current={paginationData.currentPage}
                    onChange={onPaginationChange}
                />
            </ContainerComponent>

            <Footer />
        </section>
    );
};

export default ItemPageComponent;
