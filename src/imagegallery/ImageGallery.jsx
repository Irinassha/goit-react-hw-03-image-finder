import { ImageGalleryItem } from 'components/imagegalleryitem/ImageGalleryItem';
import s from './ImageGallery.module.css'

export const ImageGallery = ({ hits }) => {
  return (
    <ul className={s.gallery}>
      {hits.map(hits => {
        console.log(hits.tags);
        return (
          <ImageGalleryItem
            key={hits.id}
            images={hits.webformatURL}
            p={hits.tags}
          />
        );
      })}
    </ul>
  );
};
