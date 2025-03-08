import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
import styles from "./Post.module.css";
import { PostResponse } from "./types";


function Post({ post }: { post: PostResponse }) 
{  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  console.log(post);
  const changeImage = (step: number) => {
    if (post.images_urls.length > 0) {
      setActiveIndex((prev) => (prev + step + post.images_urls.length) % post.images_urls.length);
    }
  };

  function getImages () {
    if (post.images_urls.length > 0) {
      return post.images_urls;
    }
    return ['default-image-url'];
  }

  const handleBuyClick = () => {
    dispatch(addItem({
      item: {
        id: post.id, 
        seller: post.seller, 
        title: post.title, 
        price: post.price, 
        available: post.quantity, 
        image: getImages()[0],
        quantity: 1 
      }
    }));
  };

  return (
    <div className={styles.Post}>
      <h2>{post.title}</h2>
      <div className={styles.ImageContainer}>
        <button className={styles.PrevButton} onClick={() => changeImage(-1)}>&#8249;</button>
        <img src={post.images_urls[activeIndex]} alt={post.title} className={styles.ActiveImage} />
        <button className={styles.NextButton} onClick={() => changeImage(1)}>&#8250;</button>
      </div>
      <div className={styles.ThumbnailContainer}>
        {post.images_urls.map((src, index) => (
          <img key={index} src={src} alt={`Thumbnail ${index}`} className={`${styles.Thumbnail} ${index === activeIndex ? styles.ActiveThumbnail : ""}`} onClick={() => setActiveIndex(index)} />
        ))}
      </div>
      <p>{post.description}</p>
      <p>{post.price} {post.currency}</p>
      <button onClick={handleBuyClick} className={styles.BuyButton}>Buy</button>
    </div>
  );
}
export default Post;