import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import products from "../../data/products.json";
import { Container } from "../../sections/Container";

export const ItemListContainer = ({ onAdd }) => {
  const { id } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    productList.then((result) => {
      if (id) {
        const productsFiltered = result.filter((item) => item.category === id);
        setList(productsFiltered);
      } else {
        setList(result);
      }
    });
  }, [id]);

  return (
    <Container>
      <ItemList onAdd={onAdd} list={list} />
    </Container>
  );
};
