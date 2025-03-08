import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/cart/cartSlice";
import { PostResponse } from "../types";
import ImageCarousel from "./ImageCarousel";
import ThumbnailList from "./ThumbnailList";
import PostDetails from "./PostDetails";
import BuyButton from "./BuyButton";
import { Box, Typography, Paper } from "@mui/material";
import useStyles from "./styles";

const getImages = (images: string[]) => {
  return images.length > 0 ? images : ['default-image-url'];
};

function Post({ post }: { post: PostResponse }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  const changeImage = (step: number) => {
    const images = getImages(post.images_urls);
    setActiveIndex((prev) => (prev + step + images.length) % images.length);
  };

  const handleBuyClick = () => {
    dispatch(addItem({
      item: {
        id: post.id,
        seller: post.seller,
        title: post.title,
        price: post.price,
        available: post.quantity,
        image: getImages(post.images_urls)[0],
        quantity: 1
      }
    }));
  };

  const images = getImages(post.images_urls);

  return (
    <Box className={classes.post}>
      <Typography variant="h4" className={classes.title}>{post.title}</Typography>

      <Paper className={classes.paper}>
        <ImageCarousel
          images={images}
          activeIndex={activeIndex}
          changeImage={changeImage}
        />

        <ThumbnailList
          images={images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        <PostDetails
          description={post.description}
          price={post.price}
          currency={post.currency}
        />

        <BuyButton handleBuyClick={handleBuyClick} />
      </Paper>
    </Box>
  );
}

export default Post;
