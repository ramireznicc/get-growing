import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const db = getFirestore();
      const itemsCollection = collection(db, "items");

      try {
        const itemsSnap = await getDocs(itemsCollection);
        const itemsList = itemsSnap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        if (id) {
          setList(itemsList.filter((item) => item.data.categoryId === id));
        } else {
          setList(itemsList);
        }

        setLoading(false);
      } catch (error) {
        console.log("error trying to get the products");
      }
    };

    getItems();
  }, [id]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {loading ? (
        <CircularProgress color="primary" />
      ) : (
        <ItemList list={list} />
      )}
    </Container>
  );
};
