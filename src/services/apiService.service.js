import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  // headers: { 'Authorization': 'Bearer' }
});

export const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` }
}
let headers = getAuthHeader();

/***** SERVICES CATEGORIES *****/
export const fetchCategoryService = async (id) => {
  try {
    const response = await apiClient.get(`/category/${id}`, { headers: headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllCategoriesService = async () => {
  try {
    const response = await apiClient.get(`/category`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCategoryService = async (body) => {
  try {
    const response = await apiClient.post(`/category`, body, { headers: headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editCategoryService = async (id, body) => {
  try {
    const response = await apiClient.put(`/category/${id}`, body, { headers: headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategoryService = async (id) => {
  try {
    const response = await apiClient.delete(`/category/${id}`, { headers: headers });
    return response.data;

  } catch (error) {
    throw error;
  }
};


/***** SERVICES PRODUCT *****/
export const fetchProductService = async (id) => {
  try {
    const response = await apiClient.get(`/product/${id}`, { headers: headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProductService = async () => {
  try {
    const response = await apiClient.get(`/product`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProductService = async (body) => {
  try {
    const response = await apiClient.post(`/product`, body, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editProductService = async (id, body) => {
  try {
    const response = await apiClient.put(`/product/${id}`, body, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;

  } catch (error) {
    throw error;
  }
};

export const deleteProductService = async (id) => {
  try {
    const response = await apiClient.delete(`/product/${id}`, { headers: headers });
    return response.data;

  } catch (error) {
    throw error;
  }
};

/***** SERVICES LOGUEO *****/
export const loginService = async (body) => {
  try {
    const response = await apiClient.post(`/auth/login`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};


