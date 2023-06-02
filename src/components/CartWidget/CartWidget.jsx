import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <IconButton
      LinkComponent={Link}
      to="/cart"
      disabled={totalItems === 0 ? true : false}
      color="primary"
    >
      <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
