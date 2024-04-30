import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import ContainerComponent from "@/components/Container/ContainerComponent";
import TitleComponent from "@/components/Title/TitleComponent";
import TextComponent from "@/components/Text/TextComponent";
import Footer from "@/components/Footer/Footer";
import "./Accessibility.css";

const Accessibility = ({ authUser }) => {
    return (
        <>
            <Navbar authUser={authUser} />
            <ContainerComponent className="accessibility__container">
                <TitleComponent className="accessibility__title">
                    Accessibility
                </TitleComponent>
                <TextComponent>
                    We are dedicated to making our website's content accessible
                    and user-friendly to everyone. If you are having difficulty
                    viewing or navigating the content on this website, or notice
                    any content, feature, or functionality that you believe is
                    not fully accessible to people with disabilities, please
                    contact us via our contact page with “Disabled Access” in
                    the subject line and provide a description of the specific
                    feature you feel is not fully accessible or a suggestion for
                    improvement. We take your feedback seriously and will
                    consider it as we evaluate ways to accommodate all of our
                    customers and our overall accessibility policies.
                    Additionally, while we do not control such vendors, we
                    strongly encourage vendors of third-party digital content to
                    provide content that is accessible and user-friendly.
                </TextComponent>
            </ContainerComponent>
            <Footer />
        </>
    );
};

export default Accessibility;
