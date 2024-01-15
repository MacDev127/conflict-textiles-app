import "./HomeCollectionSection.css";
import { useState } from "react";
// import { useTranslation } from 'react-i18next';

import { Link } from "@inertiajs/react";
import TitleComponent from "../Title/TitleComponent";
import ContainerComponent from "../Container/ContainerComponent";
import ContentComponent from "../Content/ContentComponent";
import TextComponent from "../Text/TextComponent";
import ButtonComponent from "../Button/ButtonComponent";
import GalleryComponent from "../Gallery/GalleryComponent";
import ModalComponent from "../Modal/ModalComponent";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Collection = () => {
    // const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const galleryImages = [
        {
            img: "/images/img6.jpg",
            title: "",
            titleResponse: "La cueca sola / Dancing cueca alone ",
            year: "Year ",
            yearResponse: "1989",
            creator: "Creator ",
            creatorResponse: "Violeta Morales",
            origin: "Place of Orgin ",
            originResponse: "Chile",
            type: "Type ",
            typeResponse: "Arpilleras",
            description: "Description",
            descriptionResponse:
                "This arpillera is called La Cueca Sola (‘They Dance Alone’). La Cueca is a traditional Chilean Dance, normally danced in pairs with women wearing colourful skirts. In the textile, however, the women wear black, and instead of a flower in their shirt pockets there is the silhouette of a loved one who was ‘disappeared’ by Pinochet’s regime following the military coup in 1973. Groups of women took to performing La Cueca Sola in front of Pinochet’s headquarters as a form of protest, and this inspired a number of conflict textiles on the theme – as well as the song by Sting, ‘They Dance Alone’.",
        },
        {
            img: "images/img2.jpg",
            title: "",
            titleResponse: "La cueca sola / Dancing cueca alone ",
            year: "Year: ",
            yearResponse: "1989",
            creator: "Creator: ",
            creatorResponse: "Violeta Morales",
            origin: "Orgin: ",
            originResponse: "Cork",
            type: "Type: ",
            typeResponse: "Arpilleras",
            description: "Description",
            descriptionResponse: "Description",
        },
        {
            img: "images/img3.jpg",
            title: "",
            titleResponse: "La cueca sola / Dancing cueca alone ",
            year: "Year: ",
            yearResponse: "1989",
            creator: "Creator: ",
            creatorResponse: "Violeta Morales",
            origin: "Orgin: ",
            originResponse: "Cork",
            type: "Type: ",
            typeResponse: "Arpilleras",
            description: "Description",
            descriptionResponse: "Description",
        },
        {
            img: "images/img10.jpg",
            title: "",
            titleResponse: "La cueca sola / Dancing cueca alone ",
            year: "Year: ",
            yearResponse: "1989",
            creator: "Creator: ",
            creatorResponse: "Violeta Morales",
            origin: "Orgin: ",
            originResponse: "Cork",
            type: "Type: ",
            typeResponse: "Arpilleras",
            description: "Description",
            descriptionResponse: "Description",
        },
        {
            img: "images/img11.jpg",
            title: "",
            titleResponse: "La cueca sola / Dancing cueca alone ",
            year: "Year: ",
            yearResponse: "1989",
            creator: "Creator: ",
            creatorResponse: "Violeta Morales",
            origin: "Orgin: ",
            originResponse: "Cork",
            type: "Type: ",
            typeResponse: "Arpilleras",
            description: "Description",
            descriptionResponse: "Description",
        },
        {
            img: "images/img12.jpg",
            title: "",
            titleResponse: "La cueca sola / Dancing cueca alone ",
            year: "Year: ",
            yearResponse: "1989",
            creator: "Creator: ",
            creatorResponse: "Violeta Morales",
            origin: "Orgin: ",
            originResponse: "Cork",
            type: "Type: ",
            typeResponse: "Arpilleras",
            description: "Description",
            descriptionResponse: "Description",
        },
    ];

    const handleImageClick = (index) => {
        console.log("click");
        setSelectedImageIndex(index);
        setIsModalOpen(true);
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
            <GalleryComponent
                className="test"
                galleryImages={galleryImages}
                onImageClick={handleImageClick}
            />
            <ModalComponent
                open={isModalOpen}
                onClose={() => setIsModalOpen(!isModalOpen)}
            >
                {isModalOpen && (
                    <div className="modalContent">
                        <div className="modalDetails">
                            <h3 className="textile_title">
                                {galleryImages[selectedImageIndex].title}
                                <span>
                                    {
                                        galleryImages[selectedImageIndex]
                                            .titleResponse
                                    }
                                </span>
                            </h3>
                            <p className="response">
                                {galleryImages[selectedImageIndex].year}
                                <span>
                                    {
                                        galleryImages[selectedImageIndex]
                                            .yearResponse
                                    }
                                </span>
                            </p>
                            <p className="response">
                                {galleryImages[selectedImageIndex].creator}
                                <span>
                                    {
                                        galleryImages[selectedImageIndex]
                                            .creatorResponse
                                    }
                                </span>
                            </p>
                            <p className="response">
                                {galleryImages[selectedImageIndex].origin}
                                <span>
                                    {
                                        galleryImages[selectedImageIndex]
                                            .originResponse
                                    }
                                </span>
                            </p>
                            <p className="response">
                                {galleryImages[selectedImageIndex].type}
                                <span>
                                    {
                                        galleryImages[selectedImageIndex]
                                            .typeResponse
                                    }
                                </span>
                            </p>
                            <p className="response_desc">
                                {galleryImages[selectedImageIndex].description}
                                <span>
                                    {
                                        galleryImages[selectedImageIndex]
                                            .descriptionResponse
                                    }
                                </span>
                            </p>

                            {/* Render other details here */}
                            <div className="button-container">
                                <Link to="/about">
                                    <ButtonComponent>
                                        Give Feedback
                                    </ButtonComponent>
                                </Link>
                                <Link to="/about">
                                    <ButtonComponent>
                                        View Collection
                                    </ButtonComponent>
                                </Link>
                            </div>
                        </div>
                        <div className="modalImage">
                            <TransformWrapper
                                defaultScale={1}
                                defaultPositionX={100}
                                defaultPositiony={200}
                            >
                                <TransformComponent>
                                    <img
                                        src={
                                            galleryImages[selectedImageIndex]
                                                .img
                                        }
                                        alt="Enlarged view"
                                    />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                )}
            </ModalComponent>

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
