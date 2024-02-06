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
import SubtitleComponent from "@/components/Subtitle/SubtitleComponent";
import { Link } from "@inertiajs/react";

const Collection = ({ collectionPageImages }) => {
    return (
        <section className="Collection">
            <Navbar />
            <div className="test">
                <img src="/images/test2.jpg" alt="" />
                <div className="test-overlay"></div>
                <h3>
                    <q>
                        When words are not enough to express lived experiences
                        of violence, stitching and sewing emerge as textile
                        language.
                    </q>
                </h3>
            </div>
            <ContainerComponent>
                <TitleComponent>Explore Collection</TitleComponent>
                <ContentComponent>
                    <TextComponent>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illum quaerat harum exercitationem earum ipsum.
                        Magnam aut eius voluptas sed provident obcaecati,
                        voluptates minima aliquam ducimus molestiae eum harum
                        eaque laudantium aperiam. Dolorum enim quaerat,
                        doloremque modi a porro voluptates!
                    </TextComponent>
                </ContentComponent>
                <SubtitleComponent>Theme</SubtitleComponent>
                <div className="collection__wrapper">
                    {collectionPageImages.map((image) => (
                        <div>
                            <div key={image.id} className="collection__item">
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
