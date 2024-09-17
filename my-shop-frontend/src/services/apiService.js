// src/services/apiService.js

import axios from 'axios';

// Base URL of your backend API
const BASE_URL = 'https://localhost:7229/products'; // Change this to your actual backend URL if different

const apiService = {
  // Fetch all products
  getProducts: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data; // Returns the array of products
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Re-throw the error for handling in the component
    }
  },

  // Fetch a product by ID
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data; // Returns the product object
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
  },

  // Add more methods as needed for creating, updating, and deleting products...
};

export default apiService;
