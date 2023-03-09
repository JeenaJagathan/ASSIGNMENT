import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImageList, ImageListItem, ImageListItemBar, Typography } from "@material-ui/core";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <Typography variant="h4" >
          Product Lists
        </Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {products.map((product) => (
          <ImageListItem key={product.id}>
            <img
              src={`${product.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${product.thumbnailUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={product.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={product.title}
              subtitle={<span>ID: {product.id}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ProductsPage;
