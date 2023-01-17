const BASE_URL = 'http://localhost:3000/';

// concessionnaires qui font dans la location
export const get_concessionnaires_location = async () => {
  const response = await fetch(`${BASE_URL}api/location/dealers`);
  const json = await response.json();
  return json;
};

// concessionnaires qui font dans la vente
export const get_concessionnaires_vente = async () => {
  const response = await fetch(`${BASE_URL}api/vente/dealers`);
  return response.json();
};

// récuperer un concssionnaire spécifique
export const get_dealer = async (target) => {
  const response = await fetch(`${BASE_URL}api/dealers/${target}`);
  return response.json();
};

// particuliers qui font dans la location
export const get_particuliers_location = async () => {
  const response = await fetch(
    `${BASE_URL}api/location/individuals/`
  );
  return response.json();
};

// particuliers qui font dans la vente
export const get_particuliers_vente = async () => {
  const response = await fetch(`${BASE_URL}api/vente/individuals/`);
  return response.json();
};
