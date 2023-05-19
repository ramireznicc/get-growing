import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import "./ItemCount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const ItemCount = ({ onAdd, stock, itemName, category }) => {
  const [counter, setCounter] = useState(0);
  const itemStock = stock;

  const handlerIncrease = () => {
    if (counter < itemStock) setCounter((prev) => prev + 1);
  };

  const handlerDecrease = () => {
    if (counter > 0) setCounter((prev) => prev - 1);
  };

  const handlerAdded = () => {
    onAdd(counter, itemName, category);
    setCounter(0);
  };

  const checkCount = () => {
    if (counter === 0) {
      return true;
    }
  };

  return (
    <div className="ItemCount">
      <div className="ItemCount--to-add">
        <IconButton onClick={handlerDecrease}>
          <RemoveCircleIcon color="primary" />
        </IconButton>
        <span>{counter}</span>
        <IconButton color="background.paper" onClick={handlerIncrease}>
          <AddCircleIcon color="primary" />
        </IconButton>
      </div>
      <Button
        disabled={checkCount()}
        variant="outlined"
        color="secondary"
        onClick={handlerAdded}
        sx={{ borderRadius: "12px" }}
      >
        Add to cart
      </Button>
    </div>
  );
};
