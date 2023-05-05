import "./Item.css";
import { ItemAddCounter } from "../ItemAddCounter/ItemAddCounter";

export const Item = ({ item }) => {
  const picture = () => {
    return require(`../../data/assets/${item.name}.jpg`);
  };

  return (
    <div className="Item">
      <span className="Item--category">{item.category}</span>
      <span className="Item--name">{item.name}</span>
      <div className="Item--img-detail">
        <img className="Item--img" src={picture()} alt="Product in sale" />
        <div className="Item--detail">
          <span>Click to see details</span>
        </div>
      </div>
      <span className="Item--price">{item.price}€</span>
      <span className="Item--stock">stock:{item.stock}</span>
      <ItemAddCounter />
    </div>
  );
};
