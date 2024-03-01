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
import { CollectionItemStyle } from "./Search.styled";
import { ImageContainer } from "./Search.styled";
import SearchComponent from "@/components/Search/SearchComponent";

import "./Search.css";

const Search = ({ images }) => {
    const handleImageClick = (imageId) => {
        Inertia.visit(`/textile-details/${imageId}`);
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
                <MasonryComponent className="search-masonry" images={images}>
                    {images.map((image) => (
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
                            <h3>{image.title}</h3>
                        </CollectionItemStyle>
                    ))}
                </MasonryComponent>
            </ContainerComponent>

            <Footer />
        </>
    );
};

export default Search;
