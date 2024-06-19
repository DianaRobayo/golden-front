import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  // headers: { 'Authorization': 'Bearer' }
});

export const getAllCategories = async () => {
  try {
    const response = await apiClient.get(`/category`);
    console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await apiClient.get(`/product/${id}`);
    console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getAllProduct = async () => {
  try {
    const response = await apiClient.get(`/product`);
    console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};