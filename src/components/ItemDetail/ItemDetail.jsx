import "./ ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <div className="ItemDetail">
      <img className="ItemDetail--img" src={item.img} alt="product in sale" />
      <div className="section">
        <div className="category-name">
          <span className="ItemDetail--category">{item.category}</span>
          <span className="ItemDetail--name">{item.name}</span>
        </div>
        <div className="price-add">
          <span className="ItemDetail--price">{item.price}€</span>
          <span className="ItemDetail--stock">stock:{item.stock}</span>
        </div>
        <div className="ItemDetail--description">
          <p>{item.description}</p>
        </div>
        <ItemCount
          stock={item.stock}
          onAdd={onAdd}
          itemName={item.name}
          category={item.category}
        />
      </div>
    </div>
  );
};
