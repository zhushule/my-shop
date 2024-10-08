// src/components/ProductDetail.js
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ProductDetail = ({ product, addToCart }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={product.imageUrl}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
              Price: ${product.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
