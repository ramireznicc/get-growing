import { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import { Box, Typography, Chip } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

export const Total = () => {
  const { total } = useContext(CartContext);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        opacity: "0.8",
      }}
    >
      <Typography variant="body">Total:</Typography>
      <Chip
        icon={<EuroIcon fontSize="small" color="primary" />}
        label={total()}
        sx={{ fontSize: "1rem" }}
      />
    </Box>
  );
};
