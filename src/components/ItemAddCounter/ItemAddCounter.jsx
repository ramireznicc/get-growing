import { useState } from "react";
import { Button } from "../Button/Button";
import "./ItemAddCounter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemAddCounter = () => {
  const stock = 14;
  const [counter, setCounter] = useState(0);

  const handlerIncrease = () => {
    if (counter < stock) {
      setCounter((prev) => prev + 1);
    }
  };

  const handlerDecrease = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const handlerAdded = () => {
    setCounter(0);
  };

  return (
    <div className="ItemAddCounter">
      <div className="ItemAddCounter--to-add">
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

export { ItemAddCounter };
