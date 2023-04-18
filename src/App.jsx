import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/sections/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Welcome to getGrowing plants boutique.'} />
    </div>
  );
}

export default App;
