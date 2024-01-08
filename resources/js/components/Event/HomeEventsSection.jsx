import React from "react";
import "./HomeEventSection.css";

import { Link } from "@inertiajs/react";

// import { useTranslation } from 'react-i18next';

//Components
import TitleComponent from "../Title/TitleComponent";
import TextComponent from "../Text/TextComponent";
import ContentComponent from "../Content/ContentComponent";
import ContainerComponent from "../Container/ContainerComponent";
import ButtonComponent from "../Button/ButtonComponent";
import CardComponent from "../Cards/CardsComponent";
//Components end

const HomeEventsSection = () => {
    return (
        <ContainerComponent>
            <TitleComponent>Events</TitleComponent>

            <ContentComponent>
                <TextComponent>
                    <h1 className="subtitle">Upcoming Events</h1>
                    {/* {t("about_text")} */}
                </TextComponent>
                <div className="cards_wrapper">
                    <CardComponent />
                </div>
            </ContentComponent>

            <Link to="/events">
                <ButtonComponent>
                    Find Out More
                    {/* {t("hero_button1_text")} */}
                </ButtonComponent>
            </Link>
        </ContainerComponent>
    );
};

export default HomeEventsSection;
