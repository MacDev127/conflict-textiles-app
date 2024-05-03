import React from "react";
import ItemPageComponent from "@/components/ItemPage/ItemPageComponent";
import { usePage, router } from "@inertiajs/react";

const Banner = ({ galleryImages, auth, authUser }) => {
    const { props } = usePage();
    const { flash } = props;

    const handlePageChange = (page) => {
        router.visit(`/banner?page=${page}`);
    };

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

export default Banner;
