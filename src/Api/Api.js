import axios from 'axios';



export const fetchDocumentsApi = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products`);
  return response.data;
};
export const fetchDocumentsDetailApi = async (documentId) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${documentId}`);
  return response.data;
};
