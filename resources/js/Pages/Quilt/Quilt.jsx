import React from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";
import { usePage, router } from "@inertiajs/react";

const Quilt = ({ galleryImages, countries, auth, authUser }) => {
    const { props } = usePage();
    const { flash } = props;

    const handlePageChange = (page) => {
        router.visit(`/quilt?page=${page}`);
    };

    const content = {
        type: "quilt",
        title: "Quilt Collection",
        quoteText:
            "A labyrinth ends in a wall, mandalas, guide my actions and infinite journeys",
        imageUrl: "/images/misc/test11.jpg",
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

export default Quilt;
