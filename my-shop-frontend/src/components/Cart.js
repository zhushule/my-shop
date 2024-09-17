// src/components/Cart.jsx
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Grid container spacing={2}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h5" sx={{ margin: 2 }}>
          Your cart is empty
        </Typography>
      )}
      {cartItems.length > 0 && (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Total Price: ${getTotalPrice()}
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Checkout
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Cart;
