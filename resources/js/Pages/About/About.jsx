import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import ContentComponent from "@/components/Content/ContentComponent";
import TextComponent from "@/components/Text/TextComponent";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";

import "./About.css";

const About = () => {
    return (
        <>
            <Navbar />
            <ImageHeaderComponent
                className="about__header-img"
                imageUrl="/images/misc/about-header.jpeg"
            />
            <section className="About">
                <ContainerComponent>
                    <TitleComponent>About</TitleComponent>
                    <ContentComponent>
                        <TextComponent>
                            This global textiles collection includes more than
                            400 documented pieces, such as arpilleras, quilts,
                            wall hangings, and more, all centered around themes
                            of conflict and human rights violations.
                        </TextComponent>
                    </ContentComponent>
                </ContainerComponent>
            </section>
            <Footer />
        </>
    );
};

export default About;
