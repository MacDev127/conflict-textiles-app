import "./HomeCollectionSection.css";
import { Link } from "@inertiajs/react";
import TitleComponent from "../Title/TitleComponent";
import ContainerComponent from "../Container/ContainerComponent";
import ContentComponent from "../Content/ContentComponent";
import TextComponent from "../Text/TextComponent";
import ButtonComponent from "../Button/ButtonComponent";
import GalleryComponent from "../Gallery/GalleryComponent";
import { Inertia } from "@inertiajs/inertia";
import Masonry from "react-masonry-css";

const Collection = ({ galleryImages }) => {
    const handleImageClick = (imageId) => {
        Inertia.visit(`/textile-details/${imageId}`);
    };

    const breakpoints = {
        default: 2,
        1100: 2,
        700: 1,
    };

    return (
        <ContainerComponent>
            <TitleComponent>Collection</TitleComponent>
            <ContentComponent>
                <TextComponent>
                    The Conflict Textiles collection predominantly consists of a
                    diverse range of local and international fabrics, including
                    arpilleras, quilts, and wall hangings. Additionally,
                    textiles from other collections that have been featured in
                    various exhibitions are well-documented.
                    {/* {t("collection_text")} */}
                </TextComponent>
            </ContentComponent>

            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                <div className="home__collection-item">
                    <img src="/images/arpillera/arp14.jpg" alt="" />
                    <div className="home__collection-overlay"></div>
                    <div className="home__collection-item-desc">
                        <h2>Arpillera</h2>
                        <Link href={route("arpillera")}>
                            <h3>View Collection</h3>
                        </Link>
                    </div>
                </div>

                <div className="home__collection-item">
                    <img src="/images/banner.jpg" alt="" />
                    <div className="home__collection-overlay"></div>
                    <div className="home__collection-item-desc">
                        <h2>Banner</h2>
                        <Link href={route("banner")}>
                            <h3>View Collection</h3>
                        </Link>
                    </div>
                </div>
                <div className="home__collection-item">
                    <img src="/images/quilt.jpg" alt="" />
                    <div className="home__collection-overlay"></div>
                    <div className="home__collection-item-desc">
                        <h2>Wall Hanging</h2>
                        <Link href={route("wall-hanging")}>
                            <h3>View Collection</h3>
                        </Link>
                    </div>
                </div>

                <div className="home__collection-item">
                    <img src="/images/quilt3.jpeg" alt="" />
                    <div className="home__collection-overlay"></div>
                    <div className="home__collection-item-desc">
                        <h2>Quilt</h2>
                        <Link href={route("quilt")}>
                            <h3>View Collection</h3>
                        </Link>
                    </div>
                </div>
            </Masonry>

            {/* {galleryImages ? (
                <GalleryComponent
                    galleryImages={galleryImages}
                    onImageClick={handleImageClick}
                />
            ) : (
                <div>lOADING....</div>
            )} */}

            <Link to="/about">
                <ButtonComponent>View Collection</ButtonComponent>
            </Link>
        </ContainerComponent>
    );
};

export default Collection;
