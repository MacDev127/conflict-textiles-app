import React from "react";
import "./home.css";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/HeroComponent";
import HomeAboutSection from "@/components/HomeAbout/HomeAboutSection";
import HomeCollectionSection from "@/components/HomeCollection/HomeCollectionSection";
import HomeEventsSection from "@/components/HomeEvent/HomeEventsSection";
import HomeEmailSection from "@/components/HomeEmail/HomeEmailSection";
import Footer from "@/components/Footer/Footer";

const Home = ({ events, galleryImages, translations, authUser, auth }) => {
    return (
        <>
            <section className="Home">
                <Navbar authUser={authUser} auth={auth} />
                <Hero translations={translations} />
                <HomeAboutSection translations={translations} />
                <HomeCollectionSection
                    galleryImages={galleryImages}
                    translations={translations}
                />
                <HomeEventsSection
                    events={events}
                    translations={translations}
                />
                <HomeEmailSection translations={translations} />
                <Footer />
            </section>
        </>
    );
};

export default Home;
