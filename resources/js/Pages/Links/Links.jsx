import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TextComponent from "@/components/Text/TextComponent";
import SubtitleComponent from "@/components/Subtitle/SubtitleComponent";
import BreadcrumbComponent from "@/components/Breadcrumbs/BreadcrumbComponent";

import Footer from "@/components/Footer/Footer";
import "./Links.css";
const Links = ({ authUser, type }) => {
    const links = [
        {
            img: "images/misc/about-1.jpeg",
            url: "https://cain.ulster.ac.uk/quilts/",
        },

        {
            img: "/images/misc/about.jpg",
            url: "https://www.frauenindereinenwelt.de/",
        },
        {
            img: "/images/misc/about.jpg",
            url: "https://www.forumarpilleres.cat/",
        },
        {
            img: "/images/misc/about.jpg",
            url: "http://www.irenemacwilliam.co.uk/",
        },
        {
            img: "/images/misc/about.jpg",
            url: "https://www.youtube.com/watch?v=4vVby_KniSM",
        },
        {
            img: "/images/misc/about.jpg",
            url: "https://oxfordre.com/latinamericanhistory/display/10.1093/acrefore/9780199366439.001.0001/acrefore-9780199366439-e-796",
        },
        {
            img: "/images/misc/about.jpg",
            url: "https://oxfordre.com/latinamericanhistory/display/10.1093/acrefore/9780199366439.001.0001/acrefore-9780199366439-e-796",
        },
        {
            img: "/images/misc/about.jpg",
            url: "https://stitchedvoices.wordpress.com/",
        },
        {
            img: "/images/misc/about.jpg",
            url: "http://www.storyclothdatabase.org/",
        },
    ];
    return (
        <section className="Links">
            <Navbar authUser={authUser} />
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
                        <img src={link.img} alt={`Link to ${link.url}`} />
                    </a>
                ))}
            </div>
            <Footer />
        </section>
    );
};

export default Links;
