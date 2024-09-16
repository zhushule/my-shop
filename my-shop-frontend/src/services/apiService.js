// src/services/apiService.js
import axios from 'axios';

// Base URL for the API should match the controller route in your backend
const API_BASE_URL = '/api/example'; // Corrected base URL to match the ExampleController

// Example function to fetch data from an API endpoint
export const fetchExampleData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/example-endpoint`); // Matches the backend route
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Example function to create a new item
export const createExampleItem = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/example-endpoint`, data); // Matches the backend route
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};
