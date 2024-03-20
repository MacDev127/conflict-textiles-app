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

const HomeEventsSection = ({ events }) => {
    return (
        <>
            <ContainerComponent>
                <TitleComponent>Events</TitleComponent>

                <SubtitleComponent>Upcoming Events</SubtitleComponent>

                <div className="cards_wrapper">
                    {events &&
                        events.map((event) => (
                            <CardComponent key={event.id} {...event} />
                        ))}
                </div>

                <Link href={route("events")}>
                    <ButtonComponent>View All Events</ButtonComponent>
                </Link>
            </ContainerComponent>
        </>
    );
};

export default HomeEventsSection;
