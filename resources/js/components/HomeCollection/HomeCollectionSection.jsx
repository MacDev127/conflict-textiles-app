import "./HomeCollectionSection.css";
import { Link } from "@inertiajs/react";

//Components
import TitleComponent from "../Title/TitleComponent";
import ContainerComponent from "../Container/ContainerComponent";
import ContentComponent from "../Content/ContentComponent";
import TextComponent from "../Text/TextComponent";
import ButtonComponent from "../Button/ButtonComponent";
import Masonry from "react-masonry-css";

const Collection = ({ translations }) => {
    const breakpoints = {
        default: 2,
        1100: 2,
        700: 1,
    };

    return (
        <section className="home__collection">
            <ContainerComponent>
                <TitleComponent className="home__collection_title">
                    {translations.home__collection_title}
                </TitleComponent>
                <ContentComponent>
                    <TextComponent className="home__collection_intro">
                        {translations.home__collection_intro}
                    </TextComponent>
                </ContentComponent>

                <Masonry
                    breakpointCols={breakpoints}
                    className="home__collection-masonry"
                    columnClassName="my-masonry-grid_column"
                >
                    <div className="home__collection-item">
                        <img src="/images/collections/arp14.jpg" alt="" />
                        <div className="home__collection-overlay"></div>
                        <div className="home__collection-item-desc">
                            <h2>Arpillera</h2>
                            <Link href={route("arpillera")}>
                                <h3>View Collection</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="home__collection-item">
                        <img src="/images/misc/quilt.jpg" alt="" />
                        <div className="home__collection-overlay"></div>
                        <div className="home__collection-item-desc">
                            <h2>Wall Hanging</h2>
                            <Link href={route("wall-hanging")}>
                                <h3>View Collection</h3>
                            </Link>
                        </div>
                    </div>

                    <div className="home__collection-item">
                        <img src="/images/misc/banner.jpg" alt="" />
                        <div className="home__collection-overlay"></div>
                        <div className="home__collection-item-desc">
                            <h2>Banner</h2>
                            <Link href={route("banner")}>
                                <h3>View Collection</h3>
                            </Link>
                        </div>
                    </div>

                    <div className="home__collection-item">
                        <img src="/images/misc/quilt3.jpeg" alt="" />
                        <div className="home__collection-overlay"></div>
                        <div className="home__collection-item-desc">
                            <h2>Quilt</h2>
                            <Link href={route("quilt")}>
                                <h3>View Collection</h3>
                            </Link>
                        </div>
                    </div>
                </Masonry>

                <Link href={"collection"}>
                    <ButtonComponent className="home__collection_button">
                        {translations.home__collection_button}
                    </ButtonComponent>
                </Link>
            </ContainerComponent>
        </section>
    );
};

export default Collection;
