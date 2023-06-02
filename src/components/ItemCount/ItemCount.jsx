import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import "./ItemCount.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";

export const ItemCount = ({ item, isDetail }) => {
  const { addItem } = useContext(CartContext);

  const [added, setAdded] = useState(false);
  const [counter, setCounter] = useState(0);
  const itemStock = item.data.stock;

  const handlerIncrease = () => {
    if (counter < itemStock) setCounter((prev) => prev + 1);
  };

  const handlerDecrease = () => {
    setCounter((prev) => prev - 1);
  };

  const handlerAdded = () => {
    addItem(item, counter);
    setAdded(true);
    setCounter(0);
  };

  return (
    <div className="ItemCount">
      <div className="ItemCount--to-add">
        <IconButton
          color="primary"
          disabled={
            counter === 0 ? true : isDetail ? (added ? true : false) : false
          }
          onClick={handlerDecrease}
        >
          <RemoveCircleIcon />
        </IconButton>
        <span>{counter}</span>
        <IconButton
          color="primary"
          disabled={
            counter >= itemStock
              ? true
              : isDetail
              ? added
                ? true
                : false
              : false
          }
          onClick={handlerIncrease}
        >
          <AddCircleIcon />
        </IconButton>
      </div>
      {isDetail && added ? (
        <ButtonGroup fullWidth={true} color="secondary">
          <Button
            LinkComponent={Link}
            to="/"
            sx={{ borderRadius: "12px 0px 0px 12px" }}
          >
            Keep Buying
          </Button>
          <Button
            LinkComponent={Link}
            to="/cart"
            sx={{ borderRadius: "0px 12px 12px 0px" }}
          >
            Go to Cart
          </Button>
        </ButtonGroup>
      ) : (
        <Button
          disabled={counter !== 0 ? false : true}
          variant="outlined"
          onClick={handlerAdded}
          sx={{ borderRadius: "12px" }}
          color="secondary"
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};
