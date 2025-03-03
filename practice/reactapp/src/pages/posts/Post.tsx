import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/orders/cartSlice";
import { useNavigate } from "react-router";
import styles from "./Post.module.css";

type PostProps = {
  id: number;
  seller: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  currency: string;
};

function Post({ id, seller, title, description, images, price, quantity, currency }: PostProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeImage = (step: number) => {
    if (images.length > 0) {
      setActiveIndex((prev) => (prev + step + images.length) % images.length);
    }
  };

  const handleBuyClick = () => {
    dispatch(addItem({
      item: { id, seller, title, price, available: quantity, image: images[0], quantity: 1 }
    }));
    navigate('/orders/');
  };

  return (
    <div className={styles.Post}>
      <h2>{title}</h2>
      <div className={styles.ImageContainer}>
        <button className={styles.PrevButton} onClick={() => changeImage(-1)}>&#8249;</button>
        <img src={images[activeIndex]} alt={title} className={styles.ActiveImage} />
        <button className={styles.NextButton} onClick={() => changeImage(1)}>&#8250;</button>
      </div>
      <div className={styles.ThumbnailContainer}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Thumbnail ${index}`} className={`${styles.Thumbnail} ${index === activeIndex ? styles.ActiveThumbnail : ""}`} onClick={() => setActiveIndex(index)} />
        ))}
      </div>
      <p>{description}</p>
      <p>{price} {currency}</p>
      <button onClick={handleBuyClick} className={styles.BuyButton}>Buy</button>
    </div>
  );
}
export default Post;