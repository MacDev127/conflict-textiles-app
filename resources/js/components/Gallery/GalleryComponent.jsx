import './Gallery.css';

import PropTypes from 'prop-types';

const GalleryComponent = ({ onImageClick, galleryImages }) => {
  return (
    <div>
      <div className="galleryWrapper">
        {galleryImages.map((image, index) => {
          return (
            <div
              className="single"
              key={index}
              onClick={() => onImageClick(index)}
            >
              <img src={image.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryComponent;

GalleryComponent.propTypes = {
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
