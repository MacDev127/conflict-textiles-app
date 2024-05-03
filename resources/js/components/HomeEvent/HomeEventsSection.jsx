import React from "react";
import "./HomeEventSection.css";

import { Link } from "@inertiajs/react";

//Components
import TitleComponent from "../Title/TitleComponent";
import ContainerComponent from "../Container/ContainerComponent";
import ButtonComponent from "../Button/ButtonComponent";
import CardComponent from "../Cards/CardsComponent";
import SubtitleComponent from "../Subtitle/SubtitleComponent";

//Components end

const HomeEventsSection = ({ events, translations }) => {
    return (
        <>
            <ContainerComponent>
                <TitleComponent className="home__events_title">
                    {translations.home__events_title}
                </TitleComponent>

                <SubtitleComponent className="home__events_subtitle">
                    {translations.home__events_subtitle}
                </SubtitleComponent>

                <div className="cards_wrapper">
                    {events &&
                        events.map((event) => (
                            <CardComponent key={event.id} {...event} />
                        ))}
                </div>

                <Link href={route("events")}>
                    <ButtonComponent className="home__events_button">
                        {translations.home__events_button}
                    </ButtonComponent>
                </Link>
            </ContainerComponent>
        </>
    );
};

export default HomeEventsSection;
