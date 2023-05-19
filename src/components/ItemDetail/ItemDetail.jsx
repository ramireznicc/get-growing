import "./ ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Box, Paper } from "@mui/material";

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <Paper
      className="ItemDetail"
      sx={{
        borderRadius: "12px",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "flex-start",
        gap: "15px",
        height: { md: "500px" },
      }}
    >
      <Box
        component="img"
        src={item.img}
        alt="product in sale"
        sx={{
          objectFit: "cover",
          borderRadius: { md: "12px 0px 0px 12px", xs: "12px 12px 0px 0px" },
          width: { md: " 500px", xs: "340px" },
          height: { md: "500px", xs: "340px" },
        }}
      />
      <Box
        sx={{
          height: { md: "500px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            pl: { xs: "10px", md: 0 },
            pt: { xs: 0, md: "10px" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="ItemDetail--category">{item.category}</span>
          <span className="ItemDetail--name">{item.name}</span>
        </Box>
        <Box
          sx={{
            pl: { xs: "10px", md: 0 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="ItemDetail--price">{item.price}€</span>
          <span className="ItemDetail--stock">stock:{item.stock}</span>
        </Box>
        <Box
          sx={{
            my: { xs: "20px" },
            px: { xs: "10px" },
            alignSelf: "center",
            // textAlign: "center",
            lineHeight: "1.6rem",
            letterSpacing: ".1rem",
            width: { md: " 500px", xs: "340px" },
            height: { md: " 220px" },
            maxHeight: { xs: "220px" },
            overflow: "auto",
          }}
        >
          <p>{item.description}</p>
        </Box>
        <ItemCount
          stock={item.stock}
          onAdd={onAdd}
          itemName={item.name}
          category={item.category}
        />
      </Box>
    </Paper>
  );
};
