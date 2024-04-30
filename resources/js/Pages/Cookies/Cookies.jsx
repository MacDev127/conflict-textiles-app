import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TitleComponent from "@/components/Title/TitleComponent";
import TextComponent from "@/components/Text/TextComponent";
import Footer from "@/components/Footer/Footer";
import "./Cookies.css";
const Cookies = ({ authUser }) => {
    return (
        <>
            <Navbar authUser={authUser} />
            <ContainerComponent className="cookies__container">
                <TitleComponent className="cookies__title">
                    Cookie Policy
                </TitleComponent>
                <TextComponent>
                    Conflict Textiles uses cookies to enhance user experience,
                    analyze site traffic, and personalize advertising. By using
                    our website, you consent to our use of cookies. Cookies are
                    small files stored on your device that remember your
                    preferences and collect data about your interactions. You
                    can manage cookies by adjusting your browser
                    settings—disabling them may affect your experience on our
                    site. For details on how we use data, see our Privacy
                    Policy. For questions, contact [Your Contact Information].
                    Updates to this policy will be posted as necessary.
                </TextComponent>
            </ContainerComponent>
            <Footer />
        </>
    );
};

export default Cookies;
