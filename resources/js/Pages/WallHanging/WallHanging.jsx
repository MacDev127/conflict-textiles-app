import React from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";
import { usePage, router } from "@inertiajs/react";

const WallHanging = ({ galleryImages, authUser, auth }) => {
    const { props } = usePage();
    const { flash } = props;

    const handlePageChange = (page) => {
        router.visit(`/wall-hanging?page=${page}`);
    };

    const content = {
        type: "wall-hanging", // Used for className and routing
        title: "Wall Hanging Collection",
        quoteText:
            "They document peoples’ lived experiences, memories and stories",
        imageUrl: "/images/misc/test17.jpg",
        description:
            "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis, eveniet repudiandae illo non, accusamus expedita minus vel beatae qui sapiente voluptatum ipsa maiores at, exercitationem a sed voluptas aut.",
        galleryImages,
        flash,
        authUser,
        auth,
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

export default WallHanging;
