import React, { useState } from "react";
import TitleComponent from "../Title/TitleComponent";
import SubtitleComponent from "../Subtitle/SubtitleComponent";
import ContainerComponent from "../Container/ContainerComponent";
import EmailSignUpComponent from "../Email/EmailSignUpComponent";
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
                <EmailSignUpComponent />
            </ContainerComponent>
        </section>
    );
};

export default HomeEmailSection;
