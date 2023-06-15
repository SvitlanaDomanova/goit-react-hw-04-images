import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <li key={id} className={css.ImageGalleryItem}>
            <ImageGalleryItem
              image={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          </li>
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default ImageGallery;