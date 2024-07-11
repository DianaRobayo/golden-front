import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  // headers: { 'Authorization': 'Bearer' }
});

/***** SERVICES CATEGORIES *****/
export const fetchCategoryService = async (id) => {
  try {
    const response = await apiClient.get(`/category/${id}`);
    // console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllCategoriesService = async () => {
  try {
    const response = await apiClient.get(`/category`);
    // console.log('entro categoria all', response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCategoryService = async (body) => {
  try {
    const response = await apiClient.post(`/category`, body);
    // console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editCategoryService = async (id, body) => {
  try {
    const response = await apiClient.put(`/category/${id}`, body);
    // console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteCategoryService = async (id, body) => {
  try {
    const response = await apiClient.delete(`/category/${id}`, body);
    // console.log('entro servicio', response)
    return response.data;

  } catch (error) {
    return error;
  }
};


/***** SERVICES PRODUCT *****/
export const fetchProductService = async (id) => {
  try {
    const response = await apiClient.get(`/product/${id}`);
    // console.log('entro product', response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProductService = async () => {
  try {
    const response = await apiClient.get(`/product`);
    // console.log('entro all product', response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProductService = async (body) => {
  try {
    const response = await apiClient.post(`/product`, body, { headers: {
      'content-type': 'multipart/form-data'
    }});
    // console.log('entro servicio', response)
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editProductService = async (id, body) => {
  try {
    const response = await apiClient.put(`/product/${id}`, body, { headers: {
      'content-type': 'multipart/form-data'
    }});
    console.log('entro editar', response)
    return response.data;

  } catch (error) {
    return error;
  }
};

export const deleteProductService = async (id, body) => {
  try {
    const response = await apiClient.delete(`/product/${id}`, body);
    // console.log('entro servicio', response)
    return response.data;

  } catch (error) {
    return error;
  }
};

/***** SERVICES LOGUEO *****/
export const loginService = async (body) => {
  try {
    const response = await apiClient.post(`/auth/login`, body);
    console.log('logueo servicio', response)
    return response.data;
  } catch (error) {
    throw error;
  }
};