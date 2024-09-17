// src/components/Footer.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 2, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2" color="white">
        © 2024 My Shop. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
