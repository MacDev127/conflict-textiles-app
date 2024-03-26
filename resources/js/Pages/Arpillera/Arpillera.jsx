import { React } from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";

const Arpillera = ({ galleryImages, countries }) => {
    const content = {
        type: "arpillera", // Used for className and routing
        title: "Arpillera Collection",
        quoteText:
            "In this sense arpilleras may empower people, give them a way of expressing themselves",
        imageUrl: "/images/misc/test4.jpg",
        description:
            "Arpilleras (pronounced ‘ar-pee-air-ahs’) are at the core of the collection. These hand sewn appliquéd picture textiles came to prominence during the Pinochet regimein Chile (1973-1990). As the level of detentions, enforced disappearances, torture and economic hardship soared, women gathered collectively to share their experiences  of the violence and repression of the dictatorship. Such gatherings were  often clandestine. With scraps of fabric,  needle and thread, women stitched  their stories of the human rights abuses onto a hessian/burlap backing. These arpillera testimonies later found their way to various countries such as England and Japan through solidarity groups. They informed the world of the reality of the dictatorship; a narrative         which varied from the state version.",

        galleryImages,
    };
    console.log(countries);
    return (
        <>
            <ItemPageComponent countries={countries} {...content} />
        </>
    );
};

export default Arpillera;
