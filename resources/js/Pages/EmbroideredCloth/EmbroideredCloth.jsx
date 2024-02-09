import React from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";

const EmbroideredCloth = ({ galleryImages }) => {
    const content = {
        type: "quilt",
        title: "Embroidered Cloth Collection",
        quoteText:
            "They document peoples’ lived experiences, memories and stories",
        imageUrl: "/images/misc/pagebg1.jpg",
        description:
            "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis, eveniet repudiandae illo non, accusamus expedita minus vel beatae qui sapiente voluptatum ipsa maiores at, exercitationem a sed voluptas aut.",
        galleryImages,
    };

    return <ItemPageComponent {...content} />;
};

export default EmbroideredCloth;
