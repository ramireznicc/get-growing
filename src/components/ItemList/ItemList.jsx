import { Container } from "../../sections/Container";
import { Item } from "../Item/Item";

export const ItemList = ({ list }) => {
  return (
    <Container>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Container>
  );
};
