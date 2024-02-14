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
import { PlayIcon, VideoPlayer } from "../styles/Icons.styled";
import { ModalWrapper, IconWrapper } from "./HomeAboutSection.styled";
import "./HomeAboutSection.css";
//styles end

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="home__about">
            <div className="bg-test">
                <img src="/images/misc/hpbg2.png" alt="" />
            </div>
            <ContainerComponent>
                <TitleComponent>About</TitleComponent>

                <ContentComponent className="about-content">
                    <TextComponent>
                        Conflict Textiles is home to a large collection of
                        international textiles, exhibitions and associated
                        events, all of which focus on elements of conflict and
                        human rights abuses. The collection is mainly comprised
                        of arpilleras, quilts and wall hangings. Making visible
                        the struggle for the disappeared remains at thevery core
                        of the collection.
                    </TextComponent>
                </ContentComponent>

                <ModalWrapper>
                    <IconWrapper>
                        <PlayIcon onClick={() => setIsOpen(true)} />
                        <TextComponent
                            className="modal-icon-text"
                            onClick={() => setIsOpen(true)}
                        >
                            Watch Video
                        </TextComponent>
                    </IconWrapper>
                    <ModalComponent
                        open={isOpen}
                        onClose={() => setIsOpen(!isOpen)}
                    >
                        <div className="about__modal--player">
                            <VideoPlayer
                                url="https://www.youtube.com/watch?v=HYpWaI-3SZY"
                                autoPlay={true}
                            />
                        </div>
                    </ModalComponent>
                </ModalWrapper>

                <Link to="/about">
                    <ButtonComponent>
                        Find Out More
                        {/* {t("hero_button1_text")} */}
                    </ButtonComponent>
                </Link>
            </ContainerComponent>
        </section>
    );
};

export default About;
