import "./HomeCollectionSection.css";
// import { useTranslation } from 'react-i18next';

import { Link } from "@inertiajs/react";
import TitleComponent from "../Title/TitleComponent";
import ContainerComponent from "../Container/ContainerComponent";
import ContentComponent from "../Content/ContentComponent";
import TextComponent from "../Text/TextComponent";
import ButtonComponent from "../Button/ButtonComponent";
import GalleryComponent from "../Gallery/GalleryComponent";
import { Inertia } from "@inertiajs/inertia";

const Collection = ({ galleryImages }) => {
    // const { t } = useTranslation();

    const handleImageClick = (imageId) => {
        Inertia.visit(`/textile-details/${imageId}`);
    };

    return (
        <ContainerComponent>
            <TitleComponent>
                Collection
                {/* {t("collection_title")} */}
            </TitleComponent>
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
            {galleryImages ? (
                <GalleryComponent
                    galleryImages={galleryImages}
                    onImageClick={handleImageClick}
                />
            ) : (
                <div>lOADING....</div>
            )}

            <Link to="/about">
                <ButtonComponent>
                    View Collection
                    {/* {t("hero_button1_text")} */}
                </ButtonComponent>
            </Link>
        </ContainerComponent>
    );
};

export default Collection;
