import React from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";
import { usePage, router } from "@inertiajs/react";

const EmbroideredCloth = ({ galleryImages, countries, auth, authUser }) => {
    const handlePageChange = (page) => {
        router.visit(`/embroidered-cloth?page=${page}`);
    };

    const { props } = usePage();
    const { flash } = props;
    const content = {
        type: "embroidered-cloth",
        title: "Embroidered Cloth Collection",
        quoteText:
            "As in one way or another, with each stitch, it’s like letting go of those burdens that one carries",
        imageUrl: "/images/misc/pagebg1.jpg",
        description:
            "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis, eveniet repudiandae illo non, accusamus expedita minus vel beatae qui sapiente voluptatum ipsa maiores at, exercitationem a sed voluptas aut.",
        galleryImages,
        flash,
        auth,
        authUser,
    };

    return (
        <>
            <ItemPageComponent
                {...content}
                onPaginationChange={handlePageChange}
                paginationData={{
                    currentPage: galleryImages.current_page,
                    lastPage: galleryImages.last_page,
                    totalPages: galleryImages.total,
                }}
            />
        </>
    );
};

export default EmbroideredCloth;
