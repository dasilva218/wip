import axios from "axios";

const BASE_URL = "http://localhost:3000/";

// concessionnaires qui font dans la location
export const get_concessionnaires_location = async () => {
  const response = await axios.get(`${BASE_URL}api/location/dealers`);
  return response.data;
};

// concessionnaires qui font dans la vente
export const get_concessionnaires_vente = async () => {
  const response = await axios.get(`${BASE_URL}api/vente/dealers`);
  return response.data;
};

// particuliers qui font dans la location
export const get_particuliers_location = async () => {
  const response = await axios.get(`${BASE_URL}api/location/individuals/`);
  return response.data;
};

// particuliers qui font dans la vente
export const get_particuliers_vente = async () => {
  const response = await axios.get(`${BASE_URL}api/vente/individuals/`);
  return response.data;
};
