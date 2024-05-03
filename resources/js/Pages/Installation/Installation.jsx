import React from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";
import { usePage, router } from "@inertiajs/react";

const Installation = ({ galleryImages, auth, authUser }) => {
    const { props } = usePage();
    const { flash } = props;

    const handlePageChange = (page) => {
        router.visit(`/installation?page=${page}`);
    };
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

export default Installation;
