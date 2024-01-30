import "./Gallery.css";

// import PropTypes from "prop-types";

const GalleryComponent = ({ onImageClick, collectionPageImages }) => {
    return (
        <div className="galleryWrapper">
            {collectionPageImages.map((image) => (
                <div
                    className="single"
                    key={image.id}
                    onClick={() => onImageClick(image.id)}
                >
                    <img src={image.img} alt={image.title || "Gallery Image"} />
                </div>
            ))}
        </div>
    );
};

export default GalleryComponent;

// GalleryComponent.propTypes = {
//     galleryImages: PropTypes.arrayOf(
//         PropTypes.shape({
//             img: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     onImageClick: PropTypes.func.isRequired,
//     className: PropTypes.string,
// };
