import React, { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Product from "./Product";
// add cmt
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setAllProducts(json);
      });
  }, []);
  const filterProduct = (category) => {
    const updatedList = allProducts.filter((x) => x.category === category);
    setProducts(updatedList);
  };
  return (
    <Container>
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={()=>setProducts(allProducts)}
        >
          All
        </Button>    
        <Button
          variant="contained"
          color="success"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's clothing
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </Button>
      </div>
      <hr />
      <Grid container justify="center" spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Products;
