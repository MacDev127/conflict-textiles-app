import { useState } from "react";
import { Link } from "@inertiajs/react";

//Components
import TitleComponent from "../Title/TitleComponent";
import TextComponent from "../Text/TextComponent";
import ContentComponent from "../Content/ContentComponent";
import ModalComponent from "../Modal/ModalComponent";
import ContainerComponent from "../Container/ContainerComponent";
import ButtonComponent from "../Button/ButtonComponent";
//Components end

//styles
import { PlayIcon } from "../styles/Icons.styled";
import {
    ModalWrapper,
    IconWrapper,
    VideoPlayer,
} from "./HomeAboutSection.styled";
import "./HomeAboutSection.css";
//styles end

const About = ({ translations }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="home__about">
            <div className="home__about-bg">
                <img src="/images/misc/hpbg2.png" alt="" />
            </div>
            <ContainerComponent>
                <TitleComponent className="about__title">
                    {translations.about__title}
                </TitleComponent>

                <ContentComponent className="about-content">
                    <TextComponent className="home__about-intro">
                        {translations.home__about_intro}
                    </TextComponent>
                </ContentComponent>

                <ModalWrapper>
                    <IconWrapper>
                        <PlayIcon onClick={() => setIsOpen(true)} />
                        <TextComponent
                            className="modal-icon-text"
                            onClick={() => setIsOpen(true)}
                        >
                            {translations.home__about_video}
                        </TextComponent>
                    </IconWrapper>
                    <ModalComponent
                        open={isOpen}
                        onClose={() => setIsOpen(!isOpen)}
                    >
                        <VideoPlayer
                            url="https://www.youtube.com/watch?v=HYpWaI-3SZY"
                            autoPlay={true}
                        />
                    </ModalComponent>
                </ModalWrapper>

                <Link href="/about">
                    <ButtonComponent>
                        {translations.home__about_button}
                    </ButtonComponent>
                </Link>
            </ContainerComponent>
        </section>
    );
};

export default About;
