import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TitleComponent from "@/components/Title/TitleComponent";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TextComponent from "@/components/Text/TextComponent";
import ImageHeaderComponent from "@/components/ImageHeader/ImageHeaderComponent";
import SubtitleComponent from "@/components/Subtitle/SubtitleComponent";
import ModalComponent from "@/components/Modal/ModalComponent";
import "./About.css";
//styles
import {
    ModalWrapper,
    IconWrapper,
    VideoPlayer,
    PlayIcon,
} from "./About.styled";
import "./About.css";
//styles end

const About = ({ authUser, auth }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="About">
                <Navbar authUser={authUser} auth={auth} />
                <ImageHeaderComponent
                    className="about__header-img"
                    imageUrl="/images/misc/about-4.jpg"
                    quoteText="There is something very factual about Conflict Textiles, something that makes them a testimony or witness"
                />
                <div className="about__hessian-bg">
                    <img src="/images/misc/hpbg2.png" alt="" />
                </div>
                <ContainerComponent>
                    <TitleComponent>About</TitleComponent>

                    <SubtitleComponent>The Collection</SubtitleComponent>

                    <div className="about__image-wrapper">
                        <img src="/images/misc/about-1.jpeg" alt="" />
                    </div>

                    <TextComponent>
                        Conflict Textiles is an evocative collection that traces
                        its origins to a groundbreaking exhibition titled "The
                        Art of Survival," held across multiple venues in
                        Derry-Londonderry in early 2008. Curated by Roberta
                        Bacic with the support of Derry City Council Heritage
                        and Museum Services and The Junction, the exhibition
                        showcased a unique array of international and Irish
                        quilts, highlighting the resilient stories woven into
                        each piece. Inspired by a Peruvian arpillera presented
                        during a series of meetings facilitated by Bacic for
                        Quaker House Belfast, this exhibition laid the
                        groundwork for what would become a significant archive
                        of textiles that bear witness to conflict and
                        resilience. <br />
                        <br />
                        These textiles, ranging from arpilleras, quilts, to wall
                        hangings, originate from diverse regions such as Chile,
                        Argentina, Northern Ireland, and beyond, each
                        representing personal and communal tales of adversity,
                        resistance, and survival. Managed from Ulster
                        University, the collection includes a digital archive
                        that offers interactive and detailed exploration,
                        serving both educational and commemorative purposes.
                        Launched in November 2015, the Conflict Textiles website
                        continues to grow, embodying the collective memory and
                        ongoing dialogue around conflict and reconciliation
                        globally.
                    </TextComponent>
                    <ModalWrapper>
                        <IconWrapper onClick={() => setIsOpen(true)}>
                            <PlayIcon onClick={() => setIsOpen(true)} />
                            <p>Watch Video</p>
                        </IconWrapper>
                        <ModalComponent
                            open={isOpen}
                            onClose={() => setIsOpen(!isOpen)}
                        >
                            <VideoPlayer
                                url="https://youtu.be/UWzCAmBYlec?si=hfbHjw6ZhGLdFwxp"
                                autoPlay={true}
                            />
                        </ModalComponent>
                    </ModalWrapper>
                </ContainerComponent>

                <ContainerComponent className="about__curator-container">
                    <SubtitleComponent>The Curator</SubtitleComponent>

                    <div className="about__image-wrapper">
                        <img src="/images/misc/about-2.png" alt="" />
                    </div>

                    <TextComponent>
                        Roberta Bacic, a Chilean native and current resident of
                        Northern Ireland, is the visionary founder of Conflict
                        Textiles, an extensive international collection renowned
                        for its arpilleras. With a background in philosophy and
                        English education, Bacic has also distinguished herself
                        as a human rights researcher. Her journey with textile
                        art began during Chile's oppressive Pinochet
                        dictatorship, where she used arpilleras to expose the
                        regime's repression, particularly against women. <br />{" "}
                        <br />
                        Relocating to Northern Ireland, Bacic found a new role
                        for arpilleras, utilizing them as tools to bridge
                        communities divided by conflict. This led to the
                        creation of an expansive collection that now includes
                        over 300 documented pieces, making it the most
                        comprehensive archive of its kind globally. Dubbed a
                        "dialoguing" archive, these textiles are not only
                        preserved but actively engaged in exhibitions,
                        conferences, and other educational endeavors, making
                        them dynamic instruments of cultural expression and
                        historical dialogue
                    </TextComponent>
                </ContainerComponent>
                <ContainerComponent className="about__logo-container">
                    <SubtitleComponent>The Logo</SubtitleComponent>

                    <div className="about__image-wrapper-logo">
                        <img src="/images/misc/about-3.png" alt="" />
                    </div>

                    <TextComponent>
                        Created by Roser Corbera from Cataluña, the Conflict
                        Textiles logo is woven with meanings that echo the very
                        essence of the collection. At its heart is hessian, the
                        material first chosen by the early arpilleristas,
                        bridging the gap between past and present, and
                        connecting us across diverse geographies and epochs.
                        Encircled by this historic fabric is a globe, its
                        borders intentionally uneven, symbolizing the imperfect
                        world we inhabit—a world marred by conflicts and strife,
                        reflecting the tumultuous narratives captured in the
                        textiles themselves. <br /> <br />
                        Central to the design is the blanket stitch, a
                        fundamental element in textile art that highlights the
                        integral role of stitching in the formation of these
                        poignant pieces. A single loose thread trails beyond the
                        globe's edge, a narrative thread that suggests the
                        continuation of storytelling, the many untold stories
                        still lingering, waiting to be sewn into the fabric of
                        our collective history. <br /> <br /> The color red
                        weaves through the logo, not just as a design element
                        but as a profound reminder of the bloodshed and pain
                        that are often central themes within the textiles. This
                        logo, much like the collection it represents, is not
                        just a symbol but a story in itself—a story of
                        resilience, memory, and the enduring power of art to
                        express the inexpressible
                    </TextComponent>
                </ContainerComponent>
            </section>
            <Footer />
        </>
    );
};

export default About;
