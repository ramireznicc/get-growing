import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";

export const CartWidget = () => {
  return (
    <IconButton>
      <Badge overlap="rectangular" badgeContent={2} color="secondary">
        <ShoppingCartIcon color="primary" />
      </Badge>
    </IconButton>
  );
};
