import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";
function ImageGallery({ list, openModal }) {
  return (
    <>
      <ul className={style.list}>
        {list.map((item) => (
          <li
            className={style.item}
            key={item.id}
            onClick={() => openModal(item)}
          >
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ImageGallery;
