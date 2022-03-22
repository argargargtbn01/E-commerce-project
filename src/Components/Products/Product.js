import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import store from "../../redux/store";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product))
  }
  return (
    <Card sx={{ height: 540 }}>
      <div style={{ height: 340 }}>
        <CardMedia
          sx={{ minHeight: 250 }}
          component="img"
          image={product.image}
          title={product.title}
        />
      </div>
      <div style={{ height: 140 }}>
        <CardContent
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: "medium" }}>
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${product.price}
            </Typography>
          </div>
        </CardContent>
      </div>
      <CardActions disableSpacing style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton aria-label="Add to Cart" onClick={() => { addProduct(product) }}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
