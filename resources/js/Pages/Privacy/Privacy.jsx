import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TitleComponent from "@/components/Title/TitleComponent";
import TextComponent from "@/components/Text/TextComponent";
import Footer from "@/components/Footer/Footer";
import "./Privacy.css";

const Privacy = ({ authUser }) => {
    return (
        <>
            <Navbar authUser={authUser} />
            <ContainerComponent className="privacy__container">
                <TitleComponent className="privacy__title">
                    Privacy
                </TitleComponent>
                <TextComponent>
                    Our Privacy Policy outlines our commitment to safeguarding
                    your personal data. At Conflict Textiles, we collect,
                    process, store, and delete your information in strict
                    adherence to applicable data protection laws. The
                    information gathered—from personal details provided by you
                    to data collected automatically through your interactions
                    with our website—is used to enhance your user experience,
                    communicate updates, and improve our services. We implement
                    robust security measures to protect your data, and we do not
                    share your information with third parties except as required
                    by law or to protect our rights. For any inquiries regarding
                    our privacy practices, please contact us at via our contact
                    page.
                </TextComponent>
            </ContainerComponent>
            <Footer />
        </>
    );
};

export default Privacy;
