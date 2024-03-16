import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { RootState } from "../features/store";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { items, total } = cart;

  return (
    <div className="cart">
      <Typography variant="h6">Total price: ${total.toFixed(2)}</Typography>
      <List>
        {items.map((item) => (
          <ListItem className="cart-item" key={item.id}>
            <ListItemText
              primary={item.title}
              secondary={`Количество: ${item.quantity}, Цена: $${item.price}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Cart;
