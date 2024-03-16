import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IGood } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, removeItem } from "../features/slices/cartSlice";
import { AppDispatch, RootState } from "../features/store";
import { fetchGoods } from "../features/slices/goodsSlice";

const Goods = () => {
  const dispatch = useDispatch<AppDispatch>();
  const layout = useSelector((state: RootState) => state.layout.layout);
  const goodsClass = layout === "grid" ? "goods-grid" : "goods-list";

  const { goods, status } = useSelector((state: RootState) => state.goods);

  const handleAddToCart = (item: IGood) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
  };
  const cartItems = useSelector((state: any) => state.cart.items);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGoods());
    }
  }, [status, dispatch]);

  return (
    <div className={goodsClass}>
      {goods.map((good) => (
        <Card className="goodCard" key={good.id}>
          <CardMedia>
            <img src={good.thumbnail} alt={good.title} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {good.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No description provided by dummyjson API, so please enjoy the
              placeholder
            </Typography>
            <Typography variant="body2" color="text.primary">
              Price: ${good.price}
            </Typography>
          </CardContent>
          <ButtonGroup sx={{ alignSelf: "flex-end", paddingBottom: "5px" }}>
            <IconButton
              aria-label="remove"
              onClick={() => handleRemoveItem(good.id)}
            >
              <ArrowCircleDown />
            </IconButton>

            <IconButton aria-label="add" onClick={() => handleAddToCart(good)}>
              <ArrowCircleUp />
            </IconButton>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              disabled
              label={
                cartItems.find((item: IGood) => item.id === good.id)
                  ?.quantity || 0
              }
            />
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteItem(good.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
        </Card>
      ))}
    </div>
  );
};

export default Goods;
