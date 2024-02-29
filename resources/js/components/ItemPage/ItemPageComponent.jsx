// GenericItemPage.js
import React from "react";
import { Link } from "@inertiajs/react";

//Components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import ContentComponent from "@/components/Content/ContentComponent";
import TextComponent from "@/components/Text/TextComponent";
import MasonryComponent from "@/components/Masonry/MasonryComponent";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";
import { CollectionItemStyle } from "./itemPageComponent.styled";
import { ItemDescStyle } from "./itemPageComponent.styled";
import { ImageContainer } from "./itemPageComponent.styled";

const ItemPageComponent = ({
    type,
    title,
    quoteText,
    imageUrl,
    description,
    galleryImages,
}) => {
    const handleImageClick = (imageId) => {
        Inertia.visit(`/textile-details/${imageId}`);
    };

    return (
        <section className={`${type}`}>
            <Navbar />
            <ImageHeaderComponent imageUrl={imageUrl} quoteText={quoteText} />
            <ContainerComponent>
                <TitleComponent>{title}</TitleComponent>
                <ContentComponent>
                    <TextComponent>{description}</TextComponent>
                </ContentComponent>
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
                            </ItemDescStyle>
                        </CollectionItemStyle>
                    ))}
                </MasonryComponent>
            </ContainerComponent>
            <Footer />
        </section>
    );
};

export default ItemPageComponent;
