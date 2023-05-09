import { useState } from "react";
import { Button } from "../Button/Button";
import "./ItemCount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className="ItemCount">
      <div className="ItemCount--to-add">
        <Button onPress={handlerDecrease}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <span>{counter}</span>
        <Button onPress={handlerIncrease}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <Button onPress={handlerAdded}>Add to cart</Button>
    </div>
  );
};
