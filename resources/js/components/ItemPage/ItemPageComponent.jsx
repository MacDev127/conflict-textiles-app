// GenericItemPage.js
import React from "react";
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
import "./itemPageComponent.css";
import TextileDetail from "@/Pages/TextileDetails/TextileDetail";

const ItemPageComponent = ({
    type,
    title,
    quoteText,
    imageUrl,
    description,
    galleryImages,
    countries,
}) => {
    const handleImageClick = (textileDetailId) => {
        router.visit(`/textile-details/${textileDetailId}`);
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
                            onClick={() =>
                                handleImageClick(image.textileDetail.id)
                            }
                        >
                            <Link href={`/textile-details/${image.id}`}>
                                <ImageContainer>
                                    <img src={image.img} alt={image.title} />
                                    <div className="overlay"></div>
                                </ImageContainer>
                            </Link>

                            <ItemDescStyle className={`${type}__item-desc`}>
                                <h2>{image.title}</h2>
                            </ItemDescStyle>
                        </CollectionItemStyle>
                    ))}
                </MasonryComponent>
                <ReturnLinkComponent />
            </ContainerComponent>
            <Footer />
        </section>
    );
};

export default ItemPageComponent;
