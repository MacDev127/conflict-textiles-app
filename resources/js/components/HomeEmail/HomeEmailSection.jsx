import React from "react";
import TitleComponent from "../Title/TitleComponent";
import SubtitleComponent from "../Subtitle/SubtitleComponent";
import NewsLetterComponent from "../Email/EmailSignUpComponent";
import "./HomeEmailSection.css";

const HomeEmailSection = () => {
    return (
        <section className="HomeEmailSection">
            <TitleComponent>Join Our Email List</TitleComponent>
            <SubtitleComponent>
                Hear about collections, exhibitions and events from Conflict
                Textiles.
            </SubtitleComponent>
            <NewsLetterComponent />
        </section>
    );
};

export default HomeEmailSection;
