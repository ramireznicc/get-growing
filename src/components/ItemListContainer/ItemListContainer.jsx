import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import products from "../../data/products.json";

export const ItemListContainer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    productList.then((result) => setList(result));
  }, []);

  return (
    <>
      <ItemList list={list} />
    </>
  );
};
