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
import PaginationComponent from "@/components/Pagination/PaginationComponent";

const Events = ({ upcomingEvents }) => {
    return (
        <section className="Events">
            <Navbar />
            <ImageHeaderComponent
                className="events__header-img"
                imageUrl={"/images/misc/event-header.jpeg"}
                quoteText="We explore the process of curating conflict textiles as a way to responsibly care for and preserve the complex knowledge these artifacts hold"
            />
            <ContainerComponent>
                <TitleComponent className="event__title">Events</TitleComponent>

                <ContentComponent>
                    <TextComponent>
                        Explore our range of dynamic events, including
                        exhibitions of arpilleras, quilts, and wall hangings
                        hosted in diverse venues worldwide such as museums,
                        universities, and art galleries. Each event features
                        engaging launches and a rich program of film screenings,
                        workshops, and discussions, transforming attendees from
                        observers to active participants. Stay updated with
                        comprehensive details on pre-launch preparations and
                        insights into the outcomes of each event, all available
                        in our events section
                    </TextComponent>
                </ContentComponent>

                <SubtitleComponent>Current & Upcoming Events</SubtitleComponent>
                <div className="event__cards-wrapper">
                    {upcomingEvents.data &&
                        upcomingEvents.data.length > 0 &&
                        upcomingEvents.data.map((event) => (
                            <CardComponent key={event.id} {...event} />
                        ))}
                </div>
                <PaginationComponent
                    total={upcomingEvents.last_page}
                    current={upcomingEvents.current_page}
                    onChange={(page) => {
                        /* handle page change if needed */
                    }}
                />
                <Link href="/events/previousEvents">
                    <ButtonComponent>View Past Events</ButtonComponent>
                </Link>
            </ContainerComponent>
            <Footer />
        </section>
    );
};

export default Events;
