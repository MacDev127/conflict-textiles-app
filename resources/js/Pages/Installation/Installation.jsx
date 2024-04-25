import React from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";
import { usePage } from "@inertiajs/react";

const Installation = ({ galleryImages, countries, auth }) => {
    const { props } = usePage();
    const { flash } = props;
    const content = {
        type: "installation", // Used for className and routing
        title: "Installations Collection",
        quoteText:
            "They document peoples’ lived experiences, memories and stories",
        imageUrl: "/images/misc/test17.jpg",
        description:
            "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis, eveniet repudiandae illo non, accusamus expedita minus vel beatae qui sapiente voluptatum ipsa maiores at, exercitationem a sed voluptas aut.",
        galleryImages,
        flash,
        auth,
    };

    return <ItemPageComponent {...content} countries={countries} />;
};

export default Installation;
