import { FC } from "react";
import { Box } from "@mui/material";
import useStyles from "./styles";

interface ThumbnailListProps {
  images: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ThumbnailList: FC<ThumbnailListProps> = ({ images, activeIndex, setActiveIndex }) => {
  const classes = useStyles();

  return (
    <Box className={classes.thumbnailContainer}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Thumbnail ${index}`}
          className={`${classes.thumbnail} ${index === activeIndex ? classes.activeThumbnail : ""}`}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </Box>
  );
};

export default ThumbnailList;
