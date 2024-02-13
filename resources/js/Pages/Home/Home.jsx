import React from "react";
import "./home.css";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/HeroComponent";
import HomeAboutSection from "@/components/HomeAbout/HomeAboutSection";
import HomeCollectionSection from "@/components/HomeCollection/HomeCollectionSection";
import HomeEventsSection from "@/components/HomeEvent/HomeEventsSection";
import HomeEmailSection from "@/components/HomeEmail/HomeEmailSection";
import Footer from "@/components/Footer/Footer";

const Home = ({ events, galleryImages, translations }) => {
    return (
        <>
            <section className="Home">
                <Navbar />
                <Hero translations={translations} />
                <HomeAboutSection />
                <HomeCollectionSection galleryImages={galleryImages} />
                <HomeEventsSection events={events} />
                <HomeEmailSection />
                <Footer />
            </section>
        </>
    );
};

export default Home;
