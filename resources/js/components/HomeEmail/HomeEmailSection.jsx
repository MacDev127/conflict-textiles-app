import React from "react";
import TitleComponent from "../Title/TitleComponent";
import SubtitleComponent from "../Subtitle/SubtitleComponent";
import NewsLetterComponent from "../Email/EmailSignUpComponent";
import ContainerComponent from "../Container/ContainerComponent";
import "./HomeEmailSection.css";

const HomeEmailSection = () => {
    return (
        <section className="HomeEmailSection">
            <TitleComponent className="email__title">
                Join Our Email List
            </TitleComponent>
            <ContainerComponent>
                <SubtitleComponent className="email__subtitle">
                    Hear about collections, exhibitions and events from Conflict
                    Textiles.
                </SubtitleComponent>
                <NewsLetterComponent />
            </ContainerComponent>
        </section>
    );
};

export default HomeEmailSection;
