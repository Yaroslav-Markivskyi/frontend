import { FC } from "react";
import { IconButton, Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import useStyles from "./styles";

interface ImageCarouselProps {
  images: string[];
  activeIndex: number;
  changeImage: (step: number) => void;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ images, activeIndex, changeImage }) => {
  const classes = useStyles();

  return (
    <Box className={classes.imageContainer}>
      <IconButton className={classes.prevButton} onClick={() => changeImage(-1)}>
        <ChevronLeft />
      </IconButton>
      <img src={images[activeIndex]} alt="Active" className={classes.activeImage} />
      <IconButton className={classes.nextButton} onClick={() => changeImage(1)}>
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;
