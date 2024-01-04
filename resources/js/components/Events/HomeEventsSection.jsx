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
                    Conflict Textiles is home to a large collection of
                    international textiles, exhibitions and associated events,
                    all of which focus on elements of conflict and human rights
                    abuses. The collection is mainly comprised of arpilleras,
                    quilts and wall hangings. Making visible the struggle for
                    the disappeared remains at thevery core of the collection.
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
