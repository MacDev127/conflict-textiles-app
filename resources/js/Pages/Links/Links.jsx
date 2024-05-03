import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TextComponent from "@/components/Text/TextComponent";
import SubtitleComponent from "@/components/Subtitle/SubtitleComponent";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";
import { Link } from "@inertiajs/react";

import Footer from "@/components/Footer/Footer";
import "./Links.css";
const Links = ({ authUser, type, auth }) => {
    const links = [
        {
            img: "images/misc/link1.jpeg",
            url: "https://cain.ulster.ac.uk/quilts/",
            title: "CAIN",
        },

        {
            img: "/images/misc/link2.jpeg",
            url: "https://www.frauenindereinenwelt.de/",
            title: "Frauen In Der Einenwelt",
        },
        {
            img: "/images/misc/link3.jpeg",
            url: "https://www.forumarpilleres.cat/",
            title: "Foro de Arpilleras de Cataluña",
        },
        {
            img: "/images/misc/link4.jpg",
            url: "http://www.irenemacwilliam.co.uk/",
            title: "Irene Mac William",
        },
        {
            img: "/images/misc/link5.jpeg",
            url: "https://www.youtube.com/watch?v=4vVby_KniSM",
            title: "La Belleza de la Trama (Beauty Plot)",
        },
        {
            img: "/images/misc/link6.jpg",
            url: "https://oxfordre.com/latinamericanhistory/display/10.1093/acrefore/9780199366439.001.0001/acrefore-9780199366439-e-796",
            title: "Oxford Research Encyclopedias",
        },
        {
            img: "/images/misc/link6.jpg",
            url: "https://oxfordre.com/latinamericanhistory/display/10.1093/acrefore/9780199366439.001.0001/acrefore-9780199366439-e-796",
            title: "Oxford Research Encyclopedias",
        },
        {
            img: "/images/misc/link8.jpeg",
            url: "https://stitchedvoices.wordpress.com/",
            title: "Stiched Voices",
        },
        {
            img: "/images/misc/link9.jpeg",
            url: "http://www.storyclothdatabase.org/",
            title: "Storycloth Database",
        },
    ];
    return (
        <section className="Links">
            <Navbar authUser={authUser} auth={auth} />
            <BreadcrumbComponent
                type={type}
                breadcrumbs={[
                    { label: "Home", href: "/" },

                    { label: "Links", href: "" },
                ]}
            />
            <ContainerComponent className="links__container">
                <SubtitleComponent>Useful links</SubtitleComponent>
                <TextComponent>
                    Explore our curated selection of links to resources and
                    insightful content related to conflict textiles. This page
                    provides direct access to key websites, articles, and
                    multimedia that are deeply relevant to the study and
                    understanding of textiles produced in contexts of conflict
                    and social upheaval
                </TextComponent>
            </ContainerComponent>
            <div className="grid-container">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={link.img} alt={`Link to ${link.title}`} />
                        <div className="link-title">{link.title}</div>
                    </a>
                ))}
            </div>
            <Footer />
        </section>
    );
};

export default Links;
