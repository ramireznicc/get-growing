import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const onAdd = (counter, itemName, category) => {
    console.log(`You added: ${counter} of ${itemName} ${category}`);
  };

  return (
    <BrowserRouter>
      <div className="App">
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
      </div>
    </BrowserRouter>
  );
}
export default App;
