import { Item } from "../Item/Item";

export const ItemList = ({ list }) => {
  return list.map((item) => <Item key={item.id} item={item} />);
};
