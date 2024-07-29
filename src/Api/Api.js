import axios from 'axios';



export const fetchDocumentsApi = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products`);
  console.log(response.data,"llll")
  return response.data;
};
export const fetchDocumentsDetailApi = async (documentId) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${documentId}`);
  console.log(response.data,"llll")
  return response.data;
};
