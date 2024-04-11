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

const Events = ({ events }) => {
    return (
        <section className="Events">
            <Navbar />
            <ImageHeaderComponent
                className="events__header-img"
                imageUrl={"/images/misc/event-header.jpeg"}
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

                <SubtitleComponent>Upcoming Events</SubtitleComponent>

                <div className="event__cards-wrapper">
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
            <Footer />
        </section>
    );
};

export default Events;
