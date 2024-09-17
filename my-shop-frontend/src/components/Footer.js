// src/components/Footer.jsx
import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ marginTop: 'auto', padding: 3, backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={4} justifyContent="center">
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are a leading e-commerce platform providing quality products at great prices. Our mission is to deliver the best online shopping experience.
            </Typography>
          </Grid>
          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link href="/" variant="body2" color="inherit" underline="hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cart" variant="body2" color="inherit" underline="hover">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/about" variant="body2" color="inherit" underline="hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" variant="body2" color="inherit" underline="hover">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
          {/* Social Media Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stay connected with us on social media!
            </Typography>
            {/* You can add icons for social media here */}
            {/* For example, using icons from @mui/icons-material */}
            <Link href="#" color="inherit" variant="body2" sx={{ marginRight: 1 }}>
              Facebook
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ marginRight: 1 }}>
              Twitter
            </Link>
            <Link href="#" color="inherit" variant="body2">
              Instagram
            </Link>
          </Grid>
        </Grid>
        {/* Copyright Section */}
        <Typography variant="body2" color="text.secondary" align="center" sx={{ marginTop: 3 }}>
          © {new Date().getFullYear()} React Shop. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
