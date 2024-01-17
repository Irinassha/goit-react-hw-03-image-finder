import s from './ImageGalleryItem.module.css'
export const ImageGalleryItem = ({ images, p}) => {
return (
  <li className={s.galleryItem} >
    <img className={s.itemImg} src={images} alt={p} />
  </li>
);
}




