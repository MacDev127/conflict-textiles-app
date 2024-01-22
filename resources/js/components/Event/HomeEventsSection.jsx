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

const HomeEventsSection = ({ events }) => {
    return (
        <>
            <ContainerComponent>
                <TitleComponent>Events</TitleComponent>

                <ContentComponent>
                    <h1 className="subtitle">Upcoming Events</h1>
                    {/* {t("about_text")} */}
                </ContentComponent>
                <div className="cards_wrapper">
                    {events &&
                        events.map((event) => (
                            <div key={event.id}>
                                <CardComponent key={event.id} {...event} />
                            </div>
                        ))}
                </div>
                <Link to="/events">
                    <ButtonComponent>
                        View All Events
                        {/* {t("hero_button1_text")} */}
                    </ButtonComponent>
                </Link>
            </ContainerComponent>
        </>
    );
};

export default HomeEventsSection;
