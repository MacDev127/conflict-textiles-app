import React from "react";
import { Link } from "@inertiajs/react";
import "./Events.css";

import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import ButtonComponent from "@/components/Button/ButtonComponent";
import Navbar from "@/components/Navbar/Navbar";
import CardComponent from "@/components/Cards/CardsComponent";
import SubtitleComponent from "@/components/Subtitle/SubtitleComponent";
import Footer from "@/components/Footer/Footer";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";
import ReturnLinkComponent from "@/components/Return/ReturnLinkComponent";

const PreviousEvents = ({ previousEvents }) => {
    return (
        <section className="Events">
            <Navbar />
            <ImageHeaderComponent
                className="events__header-img"
                imageUrl={"/images/misc/event-header.jpeg"}
                quoteText="We explore the process of curating conflict textiles as a way to responsibly care for and preserve the complex knowledge these artifacts hold"
            />
            <ContainerComponent>
                <TitleComponent>Events</TitleComponent>d
                <SubtitleComponent>Past Events</SubtitleComponent>
                <div className="event__cards-wrapper">
                    {previousEvents &&
                        previousEvents.length > 0 &&
                        previousEvents.map((event) => (
                            <CardComponent key={event.id} {...event} />
                        ))}
                </div>
                <ReturnLinkComponent to="/events">
                    Back to Events
                </ReturnLinkComponent>{" "}
            </ContainerComponent>

            <Footer />
        </section>
    );
};

export default PreviousEvents;
