import React from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";
import { usePage } from "@inertiajs/react";

const Banner = ({ galleryImages }) => {
    const { props } = usePage();
    const { flash } = props;

    const content = {
        type: "banner",
        title: "Banner Collection",
        quoteText:
            "There is a long tradition of protest and human struggle being expressed by means of textile hangings and banners",
        imageUrl: "/images/misc/test13.png",
        description:
            "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis, eveniet repudiandae illo non, accusamus expedita minus vel beatae qui sapiente voluptatum ipsa maiores at, exercitationem a sed voluptas aut.",
        galleryImages,
        flash,
    };

    return <ItemPageComponent {...content} />;
};

export default Banner;
