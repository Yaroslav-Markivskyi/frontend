import { FC } from "react";
import { Button } from "@mui/material";
import useStyles from "./styles";

interface BuyButtonProps {
  handleBuyClick: () => void;
}

const BuyButton: FC<BuyButtonProps> = ({ handleBuyClick }) => {
  const classes = useStyles();

  return (
    <Button onClick={handleBuyClick} className={classes.buyButton} variant="contained">
      Buy
    </Button>
  );
};

export default BuyButton;
