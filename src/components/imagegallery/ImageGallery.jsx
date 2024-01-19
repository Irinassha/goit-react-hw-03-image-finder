import { ImageGalleryItem } from 'components/imagegalleryitem/ImageGalleryItem';
import s from './ImageGallery.module.css'

export const ImageGallery = ({ hits }) => {
  return (
    <ul className={s.gallery}>
      {hits.map(({id, webformatURL, tags}) => {
        return (
          <ImageGalleryItem
            key={id}
            images={webformatURL}
            p={tags}
          />
        );
      })}
    </ul>
  );
};
