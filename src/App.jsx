import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./sections/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./components/Theme/Theme";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";

function App() {
  const onAdd = (counter, itemName, category) => {
    console.log(`You added: ${counter} of ${itemName} ${category}`);
  };

  return (
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
            <Route path="/" element={<ItemListContainer onAdd={onAdd} />} />
            <Route
              path="/category/:id"
              element={<ItemListContainer onAdd={onAdd} />}
            />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer onAdd={onAdd} />}
            />
          </Routes>
          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
