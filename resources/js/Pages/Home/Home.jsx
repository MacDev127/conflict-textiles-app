import React from "react";
import "./home.css";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/HeroComponent";
import HomeAboutSection from "@/components/About/HomeAboutSection";
import HomeCollectionSection from "@/components/Collection/HomeCollectionSection";
import HomeEventsSection from "@/components/Event/HomeEventsSection";
import Footer from "@/components/Footer/Footer";

const Home = ({ events }) => {
    console.log(events);
    return (
        <>
            <section className="Home">
                <Navbar />
                <Hero />
                <HomeAboutSection />
                <HomeCollectionSection />
                <HomeEventsSection events={events} />
                <Footer />
            </section>
        </>
    );
};

export default Home;
