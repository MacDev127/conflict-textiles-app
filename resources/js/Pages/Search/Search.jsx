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
import { CollectionItemStyle } from "./Search.styled";
import { ImageContainer } from "./Search.styled";
import { ItemDescStyle } from "./Search.styled";
import ReturnLinkComponent from "@/components/Return/ReturnLinkComponent";

import "./Search.css";

const Search = ({ galleryImages, type }) => {
    const handleImageClick = (imageId) => {
        router.visit(`/textile-details/${imageId}`);
    };
    return (
        <>
            <Navbar />
            <ContainerComponent>
                <TitleComponent>Search</TitleComponent>
                <ContentComponent>
                    <TextComponent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia pariatur alias beatae explicabo laborum error
                        dolores. A accusamus voluptatem quasi, eaque corrupti
                        autem amet quis vel necessitatibus, earum doloremque
                        facilis.
                    </TextComponent>
                </ContentComponent>
                {/* <SearchComponent /> */}
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
                <ReturnLinkComponent />
            </ContainerComponent>

            <Footer />
        </>
    );
};

export default Search;
