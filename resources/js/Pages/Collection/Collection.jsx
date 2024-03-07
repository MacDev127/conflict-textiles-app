import React from "react";
import "./Collection.css";
import { Link } from "@inertiajs/react";

//components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import ContentComponent from "@/components/Content/ContentComponent";
import TextComponent from "@/components/Text/TextComponent";
import SubtitleComponent from "@/components/Subtitle/SubtitleComponent";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";
import SearchComponent from "@/components/Search/SearchComponent";

const Collection = ({ collectionPageImages, countries }) => {
    return (
        <section className="Collection">
            <Navbar />

            <ImageHeaderComponent
                imageUrl="/images/misc/test2.jpg"
                quoteText="When words are not enough to express lived experiences
                         of violence, stitching and sewing emerge as textile
                         language."
            />

            <ContainerComponent>
                <TitleComponent>Collection</TitleComponent>
                <ContentComponent>
                    <TextComponent>
                        This global textiles collection includes more than 400
                        documented pieces, such as arpilleras, quilts, wall
                        hangings, and more, all centered around themes of
                        conflict and human rights violations.
                    </TextComponent>
                    <SearchComponent countries={countries} />
                </ContentComponent>
                <SubtitleComponent>Theme</SubtitleComponent>
                <div className="collection__wrapper">
                    {collectionPageImages.map((image) => (
                        <div key={image.id}>
                            <div className="collection__item">
                                <Link href={`/${image.type}`}>
                                    <img src={image.img} alt={image.title} />
                                </Link>
                                <div className="collection__item-view">
                                    <Link href={`/${image.type}`}>
                                        <h3 className="testy">
                                            Explore Collection
                                        </h3>
                                    </Link>
                                </div>
                            </div>
                            <div className="collection__item-desc">
                                <h2>{image.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </ContainerComponent>
            <Footer />
        </section>
    );
};

export default Collection;
