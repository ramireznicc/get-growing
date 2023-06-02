import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./context/Theme/Theme";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Container
            disableGutters
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100vh",
            }}
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
