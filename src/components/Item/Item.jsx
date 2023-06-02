import "./Item.css";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ item }) => {
  return (
    <div className="Item">
      <div className="Item--img-detail">
        <img
          className="Item--img"
          src={item.data.imageId}
          alt="product on sale"
        />
        <Link to={`/item/${item.id}`}>
          <div className="Item--detail">
            <span>Click to see details</span>
          </div>
        </Link>
      </div>
      <div className="Item--content">
        <span className="Item--category">{item.data.categoryId}</span>
        <span className="Item--name">{item.data.title}</span>
        <span className="Item--price">{item.data.price}€</span>
        <span className="Item--stock">stock:{item.data.stock}</span>
      </div>
      <ItemCount isDetail={false} item={item} />
    </div>
  );
};
