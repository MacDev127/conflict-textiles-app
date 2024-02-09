import React from "react";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

import "./Quilt.css";

//Components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import ContentComponent from "@/components/Content/ContentComponent";
import TextComponent from "@/components/Text/TextComponent";
import MasonryComponent from "@/components/Masonry/MasonryComponent";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";

const Quilt = ({ galleryImages }) => {
    const handleImageClick = (imageId) => {
        Inertia.visit(`/textile-details/${imageId}`);
    };
    return (
        <section className="Quilt">
            <Navbar />
            <ImageHeaderComponent
                imageUrl="/images/misc/test11.jpg"
                quoteText="There is a long tradition of protest and human struggle being expressed by means of textile hangings and quilts"
            />
            <ContainerComponent>
                <TitleComponent>Quilt</TitleComponent>
                <ContentComponent>
                    <TextComponent>
                        Arpilleras (pronounced ‘ar-pee-air-ahs’) can be simply
                        described as three-dimensional appliquéd tapestries of
                        Latin America that originated in Chile. These became the
                        medium for women, generally working collectively, to
                        denounce the human rights abuses and repression of the
                        Pinochet dictatorship in Chile, 1973-1990.
                    </TextComponent>
                </ContentComponent>
                <MasonryComponent
                    galleryImages={galleryImages}
                    onImageClick={handleImageClick}
                >
                    {galleryImages.map((image) => (
                        <>
                            <div
                                className="quilt__collection-item"
                                key={image.id}
                            >
                                <img
                                    src={image.img}
                                    alt={image.title}
                                    onClick={() => handleImageClick(image.id)}
                                />
                                <div className="overlay"></div>
                                <div className="quilt__collection-item-desc">
                                    <Link href={`/textile-details/${image.id}`}>
                                        <h3>View Details</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className="quilt__item-desc">
                                <h2>{image.title}</h2>
                            </div>
                        </>
                    ))}
                </MasonryComponent>
            </ContainerComponent>

            <Footer />
        </section>
    );
};

{
}

export default Quilt;
