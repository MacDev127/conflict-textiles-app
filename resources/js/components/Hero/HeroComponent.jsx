import { Link } from "@inertiajs/react";
import Slider from "react-slick";

import "./HeroComponent.css";
import ButtonComponent from "../Button/ButtonComponent";

const Hero = ({ translations }) => {
    const settings = {
        // dots: true,
        button: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 9000,
        cssEase: "linear",
    };

    return (
        <>
            <section className="hero">
                <Slider {...settings}>
                    <div className="hero__image-container">
                        <video src="/images/video.mp4" autoPlay loop muted />
                        <div className="hero__overlay"></div>
                        <div className="hero__content">
                            <h1 className="hero__title">Conflict</h1>
                            <h1 className="hero__title">Textiles</h1>

                            <p className="hero__text">
                                {translations.hero__text}
                                {/* Explore the rich tapestry of stories woven into
                                our collection */}
                                {/* {t("hero_text")} */}
                            </p>
                            <div className="hero__btn-container">
                                <Link to="/about">
                                    <ButtonComponent className="hero__button">
                                        Find out More
                                        {/* {t("hero_button1_text")} */}
                                    </ButtonComponent>
                                </Link>

                                <Link to="/textiles">
                                    <ButtonComponent className="hero__button">
                                        View Collection
                                        {/* {t("hero_button2_text")} */}
                                    </ButtonComponent>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    );
};

export default Hero;
