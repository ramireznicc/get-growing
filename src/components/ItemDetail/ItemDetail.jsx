import "./ ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Box, Paper } from "@mui/material";

export const ItemDetail = ({ item }) => {
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
        src={item.data.imageId}
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
          <span className="ItemDetail--category">{item.data.categoryId}</span>
          <span className="ItemDetail--name">{item.data.title}</span>
        </Box>
        <Box
          sx={{
            pl: { xs: "10px", md: 0 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span className="ItemDetail--price">{item.data.price}€</span>
          <span className="ItemDetail--stock">stock:{item.data.stock}</span>
        </Box>
        <Box
          sx={{
            my: { xs: "20px" },
            px: { xs: "10px" },
            alignSelf: "center",
            lineHeight: "1.6rem",
            letterSpacing: ".1rem",
            width: { md: " 500px", xs: "340px" },
            height: { md: " 220px" },
            maxHeight: { xs: "220px" },
            overflow: "auto",
            textTransform: "none",
          }}
        >
          <p>{item.data.description}</p>
        </Box>
        <ItemCount isDetail={true} item={item} />
      </Box>
    </Paper>
  );
};
