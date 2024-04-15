import React from "react";
import { Link } from "@inertiajs/react";
import "./Events.css";

import TitleComponent from "@/components/Title/TitleComponent";
import TextComponent from "@/components/Text/TextComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import ButtonComponent from "@/components/Button/ButtonComponent";
import Navbar from "@/components/Navbar/Navbar";
import CardComponent from "@/components/Cards/CardsComponent";
import SubtitleComponent from "@/components/Subtitle/SubtitleComponent";
import Footer from "@/components/Footer/Footer";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";
import ContentComponent from "@/components/Content/ContentComponent";

const Events = ({ upcomingEvents, previousEvents }) => {
    return (
        <section className="Events">
            <Navbar />
            <ImageHeaderComponent
                className="events__header-img"
                imageUrl={"/images/misc/event-header.jpeg"}
                quoteText="We explore the process of curating conflict textiles as a way to responsibly care for and preserve the complex knowledge these artifacts hold"
            />
            <ContainerComponent>
                <TitleComponent>Events</TitleComponent>

                <ContentComponent>
                    <TextComponent>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ut enim nesciunt beatae in, doloribus asperiores
                        laborum ullam nulla eveniet nihil! Deserunt cumque, non
                        autem facilis nulla sed? Adipisci, facilis tempora!
                    </TextComponent>
                </ContentComponent>

                <SubtitleComponent>Current & Upcoming Events</SubtitleComponent>
                <div className="event__cards-wrapper">
                    {upcomingEvents &&
                        upcomingEvents.length > 0 &&
                        upcomingEvents.map((event) => (
                            <CardComponent key={event.id} {...event} />
                        ))}
                </div>

                <Link href="/events/previousEvents">
                    <ButtonComponent>
                        View Past Events
                        {/* {t("hero_button1_text")} */}
                    </ButtonComponent>
                </Link>
            </ContainerComponent>
            <Footer />
        </section>
    );
};

export default Events;
