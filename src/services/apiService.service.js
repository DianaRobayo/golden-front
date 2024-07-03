import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  // headers: { 'Authorization': 'Bearer' }
});

export const getAllCategoriesService = async () => {
  try {
    const response = await apiClient.get(`/category`);
    console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const createCategoryService = async (body) => {
  try {
    const response = await apiClient.post(`/category`, body);
    console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error.message;
  }
};

export const editCategoryService = async (id, body) => {
  try {
    const response = await apiClient.put(`/category/${id}`, body);
    console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error.message;
  }
};


/* SERVICES PRODUCT */
export const fetchProductService = async (id) => {
  try {
    const response = await apiClient.get(`/product/${id}`);
    console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getAllProductService = async () => {
  try {
    const response = await apiClient.get(`/product`);
    console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const createProductService = async (body) => {
  try {
    const response = await apiClient.post(`/product`, body, { headers: {
      'content-type': 'multipart/form-data'
    }});
    console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error.message;
  }
};

export const editProductService = async (id, body) => {
  try {
    const response = await apiClient.put(`/product/${id}`, body, { headers: {
      'content-type': 'multipart/form-data'
    }});
    console.log('entro servicio', response)
    return response.data;

  } catch (error) {
    console.error('Error fetching data:', error);
    return error.message;
  }
};