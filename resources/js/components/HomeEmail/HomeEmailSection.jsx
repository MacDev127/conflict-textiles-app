import React, { useState } from "react";
import TitleComponent from "../Title/TitleComponent";
import SubtitleComponent from "../Subtitle/SubtitleComponent";
import ContainerComponent from "../Container/ContainerComponent";
import EmailSignUpComponent from "../Email/EmailSignUpComponent";
import "./HomeEmailSection.css";

const HomeEmailSection = ({ translations }) => {
    return (
        <section className="HomeEmailSection">
            <TitleComponent className="email__title">
                {translations.email__title}
            </TitleComponent>
            <ContainerComponent>
                <SubtitleComponent className="email__subtitle">
                    {translations.email__subtitle}
                </SubtitleComponent>
                <EmailSignUpComponent />
            </ContainerComponent>
        </section>
    );
};

export default HomeEmailSection;
