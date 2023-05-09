import "./Item.css";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ item, onAdd }) => {
  return (
    <div className="Item">
      <span className="Item--category">{item.category}</span>
      <span className="Item--name">{item.name}</span>
      <div className="Item--img-detail">
        <img className="Item--img" src={item.img} alt="Product in sale" />
        <Link to={`/item/${item.id}`}>
          <div className="Item--detail">
            <span>Click to see details</span>
          </div>
        </Link>
      </div>
      <span className="Item--price">{item.price}€</span>
      <span className="Item--stock">stock:{item.stock}</span>
      <ItemCount
        onAdd={onAdd}
        itemName={item.name}
        category={item.category}
        stock={item.stock}
      />
    </div>
  );
};
