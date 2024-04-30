import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TitleComponent from "@/components/Title/TitleComponent";
import TextComponent from "@/components/Text/TextComponent";
import Footer from "@/components/Footer/Footer";
import "./Disclaimer.css";

const Disclaimer = ({ authUser }) => {
    return (
        <>
            <Navbar authUser={authUser} />
            <ContainerComponent className="disclaimer__container">
                <TitleComponent className="disclaimer__title">
                    Disclaimer
                </TitleComponent>
                <TextComponent>
                    Please note that while we strive to provide accurate and
                    up-to-date translations, the content on this site may not
                    always reflect perfect accuracy in all languages. Any
                    discrepancies or differences created in the translations are
                    not binding and have no legal effect for compliance or
                    enforcement purposes. Conflict Textiles does not assume
                    responsibility for any errors, omissions, or inaccuracies
                    that may appear in the translated content. We appreciate
                    your understanding and invite you to contact us if you have
                    any concerns regarding the translations provided
                </TextComponent>
            </ContainerComponent>
            <Footer />
        </>
    );
};

export default Disclaimer;
