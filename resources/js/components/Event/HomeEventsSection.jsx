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
                        events.map((event, index) => (
                            <>
                                <CardComponent key={event.id} {...event} />
                            </>
                        ))}
                </div>
                <Link to="/events">
                    <ButtonComponent>
                        Find Out More
                        {/* {t("hero_button1_text")} */}
                    </ButtonComponent>
                </Link>
            </ContainerComponent>
        </>
    );
};

export default HomeEventsSection;

// const events = [
//     {
//         image: "/images/about.jpg",
//         title: "Connecting Ties Exhibition",
//         time: "10:00am-5.00pm",
//         date: "25 Feb - 20 March, 2024",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//     },
//     {
//         image: "/images/event2.jpg",
//         title: "The Workhouse Workshop",
//         time: "10:00am-5.00pm",
//         date: "March 5, 2024",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//     },
//     {
//         image: "/images/event1.jpg",
//         title: "Mapping Memory Conference",
//         time: "10:00am-5.00pm",
//         date: "22 Feb - 23 Feb, 2024",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//     },
// ];
