import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../../data/products.json";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Container } from "@mui/material";
import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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
    <Container
      fixed
      disableGutters
      sx={{
        overflow: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: "20px",
      }}
    >
      <IconButton
        LinkComponent={Link}
        to={onPreviousItem()}
        size="large"
        sx={{ display: { md: "flex", xs: "none" }, mr: "16px" }}
        color="secondary"
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>
      <ItemDetail item={item} onAdd={onAdd} />
      <IconButton
        size="large"
        LinkComponent={Link}
        to={onNextItem()}
        sx={{ display: { md: "flex", xs: "none" }, ml: "16px" }}
        color="secondary"
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>
    </Container>
  );
};
