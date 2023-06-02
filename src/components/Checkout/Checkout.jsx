import {
  Container,
  Box,
  Button,
  IconButton,
  Typography,
  Stack,
  Tooltip,
} from "@mui/material";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext/CartContext";
import { Total } from "../Total/Total";
import TextField from "@mui/material/TextField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const Checkout = () => {
  const { total, cart, clear } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [idCopied, setIdCopied] = useState(false);
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const date = new Date().toString();
  const productsInfo = cart.map((item) => ({
    product: item.data.title,
    category: item.data.categoryId,
    quantity: item.quantity,
    unitPrice: item.data.price,
  }));

  const [buyer, setBuyer] = useState({
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    phone: "123123123",
  });

  const handleChange = (e) => {
    setBuyer((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const sendOrder = () => {
    const order = {
      buyer: buyer,
      items: productsInfo,
      total: total(),
      date: date,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      console.log("order id " + id + " created!");
      setOrderId(id);
    });
  };

  const copyId = () => {
    navigator.clipboard.writeText(orderId);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        width: { xs: "90%", md: "500px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "22px",
      }}
    >
      {isDone ? (
        <>
          <Typography
            variant="h5"
            color="primary"
            letterSpacing=".1rem"
            textTransform="uppercase"
            fontWeight="800"
          >
            Order completed <CheckCircleIcon />
          </Typography>
          <Stack alignItems="center">
            <Typography variant="h6">Thanks for your purchase</Typography>
            <Typography fontWeight="700" color="secondary" variant="h5">
              {buyer.name}!
            </Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Typography variant="body">Your order ID is:</Typography>
            <ArrowDownwardIcon fontSize="small" color="secondary" />
          </Box>
          <Typography variant="h6" color="primary">
            {orderId === "" ? (
              <CircularProgress color="secondary" />
            ) : idCopied ? (
              <Stack alignItems="center">
                Order ID copied to clipboard!{" "}
                <Tooltip title="Show order ID again">
                  <IconButton
                    onClick={() => setIdCopied(false)}
                    color="secondary"
                  >
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Stack>
            ) : (
              orderId
            )}
          </Typography>
          <Stack my="10px" direction="row" gap="16px">
            <Tooltip title="Go back to home page">
              <IconButton color="secondary" LinkComponent={Link} to="/">
                <HomeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy purchase ID">
              <IconButton
                color="secondary"
                onClick={() => {
                  copyId();
                  setIdCopied(true);
                }}
                disabled={idCopied ? true : false}
              >
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </>
      ) : (
        <>
          <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end" }}>
            <AccountCircleIcon
              fontSize="small"
              sx={{ color: "secondary.main", mr: 1, my: 0.5 }}
            />
            <TextField
              required={true}
              fullWidth
              id="name"
              label="Name & Last Name"
              variant="standard"
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end" }}>
            <AlternateEmailIcon
              fontSize="small"
              sx={{ color: "secondary.main", mr: 1, my: 0.5 }}
            />
            <TextField
              required={true}
              fullWidth
              id="email"
              label={
                buyer.email.includes("@" && ".com")
                  ? "e-Mail"
                  : "Please, enter a valid e-Mail"
              }
              variant="standard"
              type="email"
              onChange={handleChange}
              error={buyer.email.includes("@" && ".com") ? false : true}
            />
          </Box>
          <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end" }}>
            <AlternateEmailIcon
              fontSize="small"
              sx={{ color: "secondary.main", mr: 1, my: 0.5 }}
            />
            <TextField
              required={true}
              fullWidth
              id="email"
              label={
                isEmailWrong ? "The e-Mails don't match" : "Repeat your e-Mail"
              }
              variant="standard"
              type="email"
              onChange={(e) => {
                if (e.target.value !== buyer.email) {
                  setIsEmailWrong(true);
                } else {
                  setIsEmailWrong(false);
                }
              }}
              error={isEmailWrong}
            />
          </Box>
          <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end" }}>
            <PhoneIcon
              fontSize="small"
              sx={{ color: "secondary.main", mr: 1, my: 0.5 }}
            />
            <TextField
              required={true}
              fullWidth
              id="phone"
              label={
                isNaN(buyer.phone)
                  ? "Please, enter a valid phone number"
                  : "Phone Number"
              }
              variant="standard"
              onChange={handleChange}
              error={isNaN(buyer.phone) ? true : false}
            />
          </Box>
          <Total />
          <Button
            disabled={
              isEmailWrong ||
              buyer.name === "Jhon Doe" ||
              buyer.email === "jhondoe@gmail.com" ||
              buyer.phone === "123123123"
                ? true
                : false
            }
            variant="outlined"
            color="secondary"
            sx={{ borderRadius: "12px" }}
            onClick={() => {
              sendOrder();
              clear();
              setIsDone(true);
            }}
          >
            Buy Now
          </Button>
        </>
      )}
    </Container>
  );
};
