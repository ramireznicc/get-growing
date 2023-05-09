import { Item } from "../Item/Item";

export const ItemList = ({ list, onAdd }) => {
  return list.map((item) => <Item key={item.id} item={item} onAdd={onAdd} />);
};
