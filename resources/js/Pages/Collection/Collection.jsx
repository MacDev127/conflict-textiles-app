import React from "react";
import "./Collection.css";
import { Inertia } from "@inertiajs/inertia";

//components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import ContentComponent from "@/components/Content/ContentComponent";
import TextComponent from "@/components/Text/TextComponent";
import GalleryComponent from "@/components/Gallery/GalleryComponent";
import { Link } from "@inertiajs/react";

const Collection = ({ collectionPageImages }) => {
    console.log(collectionPageImages);
    const handleImageClick = (imageId) => {
        Inertia.visit(`/textile-details/${imageId}`);
    };
    return (
        <section className="Collection">
            <Navbar />
            <ContainerComponent>
                <TitleComponent>Collection</TitleComponent>
                <ContentComponent>
                    <TextComponent></TextComponent>
                </ContentComponent>
                {/* <GalleryComponent
                    collectionPageImages={collectionPageImages}
                    // onImageClick={handleImageClick}
                > */}
                <h2 className="sub-heading">Theme</h2>

                <div className="collection__wrapper">
                    {collectionPageImages.map((image) => (
                        <div>
                            <div className="collection__item" key={image.id}>
                                <img
                                    src={image.img}
                                    alt={image.title}
                                    onClick={() => handleImageClick(image.id)}
                                />
                                <div className="overlay"></div>
                            </div>
                            <div className="collection__item-desc">
                                <h2>{image.title}</h2>
                                {/* <Link href={`/textile-details/${image.id}`}>
                             <h3>View Details</h3>
                         </Link> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* </GalleryComponent> */}
            </ContainerComponent>
            <Footer />
        </section>
    );
};

export default Collection;
