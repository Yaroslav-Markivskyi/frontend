import { FC } from "react";
import { Typography, Box } from "@mui/material";
import useStyles from "./styles";

interface PostDetailsProps {
  description: string;
  price: number;
  currency: string;
}

const PostDetails: FC<PostDetailsProps> = ({ description, price, currency }) => {
  const classes = useStyles();

  return (
    <Box className={classes.postDetails}>
      <Typography variant="body1" className={classes.description}>
        {description}
      </Typography>
      <Typography variant="h6" className={classes.price}>
        {price} {currency}
      </Typography>
    </Box>
  );
};

export default PostDetails;
