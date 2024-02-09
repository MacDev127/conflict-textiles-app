import React from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";

const Quilt = ({ galleryImages }) => {
    const content = {
        type: "quilt", // Used for className and routing
        title: "Quilt Collection",
        quoteText:
            "A labyrinth ends in a wall, mandalas, guide my actions and infinite journeys",
        imageUrl: "/images/misc/test11.jpg",
        description:
            "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis, eveniet repudiandae illo non, accusamus expedita minus vel beatae qui sapiente voluptatum ipsa maiores at, exercitationem a sed voluptas aut.",
        galleryImages,
    };

    return <ItemPageComponent {...content} />;
};

export default Quilt;
