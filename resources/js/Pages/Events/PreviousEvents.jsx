import React from "react";
import { Link } from "@inertiajs/react";
import "./Events.css";

import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import Navbar from "@/components/Navbar/Navbar";
import CardComponent from "@/components/Cards/CardsComponent";
import SubtitleComponent from "@/components/Subtitle/SubtitleComponent";
import Footer from "@/components/Footer/Footer";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

import "./Events.css";

const PreviousEvents = ({ previousEvents, authUser }) => {
    return (
        <section className="PreviousEvents">
            <Navbar authUser={authUser} />
            <div className="image__header-container">
                <ImageHeaderComponent
                    className="events__header-img"
                    imageUrl={"/images/misc/event-header.jpeg"}
                    quoteText="We explore the process of curating conflict textiles as a way to responsibly care for and preserve the complex knowledge these artifacts hold"
                />
                <BreadcrumbComponent
                    breadcrumbs={[
                        { label: "Events", href: "/events" },
                        { label: "Past Events", href: "/previousEvents" },
                    ]}
                />
            </div>

            <ContainerComponent>
                <TitleComponent className="event__title">Events</TitleComponent>
                <SubtitleComponent>Past Events</SubtitleComponent>
                <div className="event__cards-wrapper">
                    {previousEvents &&
                        previousEvents.length > 0 &&
                        previousEvents.map((event) => (
                            <CardComponent key={event.id} {...event} />
                        ))}
                </div>
                <PaginationComponent
                    total={previousEvents.last_page}
                    current={previousEvents.current_page}
                    onChange={(page) => {}}
                />
            </ContainerComponent>

            <Footer />
        </section>
    );
};

export default PreviousEvents;
