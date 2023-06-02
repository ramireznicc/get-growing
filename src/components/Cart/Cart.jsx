import { Container, Button, ButtonGroup, IconButton } from "@mui/material";
import { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Total } from "../Total/Total";

export const Cart = () => {
  const navigate = useNavigate();
  const { cart, clear, removeItem } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return totalItems === 0 ? (
    navigate("/")
  ) : (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <List
        sx={{
          width: { xs: "360px", md: "35%" },
        }}
      >
        {cart.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              border: "solid 1px rgba(0, 0, 0, 0.2)",
              borderRadius: "12px",
              my: "10px",
            }}
          >
            <ListItemAvatar>
              <Avatar alt="product added to cart" src={item.data.imageId} />
            </ListItemAvatar>
            <ListItemText
              id={item.id}
              primary={item.data.title}
              primaryTypographyProps={{
                color: "secondary",
                letterSpacing: ".1rem",
              }}
              secondary={item.data.categoryId}
              secondaryTypographyProps={{
                textTransform: "uppercase",
                letterSpacing: ".1rem",
              }}
            />
            <ListItemText
              sx={{
                textAlign: "end",
              }}
              id={item.id}
              primary={`${(item.data.price * item.quantity).toFixed(2)} €`}
              primaryTypographyProps={{ color: "primary.main" }}
              secondary={`${item.quantity} units`}
            />
            <IconButton
              onClick={() => removeItem(item.id)}
              sx={{ ml: "1rem" }}
              color="secondary"
              size="small"
            >
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Total />
      <ButtonGroup sx={{ my: "10px" }} color="secondary">
        <Button
          sx={{ borderRadius: "12px 0px 0px 12px" }}
          onClick={clear}
          variant="outlined"
          color="secondary"
        >
          Empty cart
        </Button>
        <Button
          sx={{ borderRadius: "0px 12px 12px 0px" }}
          LinkComponent={Link}
          to="/checkout"
          variant="outlined"
          color="secondary"
        >
          Checkout
        </Button>
      </ButtonGroup>
    </Container>
  );
};
