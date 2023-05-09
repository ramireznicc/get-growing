import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../../data/products.json";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Container } from "../../sections/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button";

export const ItemDetailContainer = ({ onAdd }) => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      const product = products.find((item) => item.id === Number(id));
      resolve(product);
    });
    getItem.then((result) => setItem(result));
  }, [id]);

  const onNextItem = () => {
    if (id < products.length) {
      return `/item/${Number(id) + 1}`;
    } else {
      return `/item/${products.length}`;
    }
  };

  const onPreviousItem = () => {
    if (id > 1) {
      return `/item/${Number(id) - 1}`;
    } else {
      return `/item/1`;
    }
  };

  return (
    <Container>
      <Link to={onPreviousItem()}>
        <Button>
          <FontAwesomeIcon fontSize={"3rem"} icon={faArrowLeft} />
        </Button>
      </Link>
      <ItemDetail item={item} onAdd={onAdd} />
      <Link to={onNextItem()}>
        <Button>
          <FontAwesomeIcon fontSize={"3rem"} icon={faArrowRight} />
        </Button>
      </Link>
    </Container>
  );
};
