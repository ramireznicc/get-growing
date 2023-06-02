import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      setLoading(true);
      const db = getFirestore();
      const itemDocRef = doc(db, "items", id);

      try {
        const itemDocSnap = await getDoc(itemDocRef);

        if (itemDocSnap.exists()) {
          setItem({ id: itemDocSnap.id, data: itemDocSnap.data() });
        } else {
          console.log("The product doesn't exist");
        }

        setLoading(false);
      } catch (error) {
        console.log("error trying to get the product", error);
      }
    };

    if (id) {
      getItem();
    }
  }, [id]);

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: "20px",
      }}
    >
      {loading ? (
        <CircularProgress color="primary" />
      ) : (
        <ItemDetail item={item} />
      )}
    </Container>
  );
};
