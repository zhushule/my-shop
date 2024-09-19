import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  if (cartItems.length === 0) {
    return <Typography variant="h5">Your cart is empty</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {cartItems.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="h6">Price: ${item.price}</Typography>
              <Typography variant="h6">Quantity: {item.quantity}</Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => updateQuantity(item, item.quantity + 1)}
              >
                +
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => updateQuantity(item, item.quantity - 1)}
                disabled={item.quantity === 1}
              >
                -
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;
