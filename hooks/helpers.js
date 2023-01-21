const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://wip-five.vercel.app/'
    : 'http://localhost:3000/';

// concessionnaires qui font dans la location
export const get_concessionnaires_location = async () => {
  const response = await fetch(`${URL}api/location/dealers`);

  return response.json();
};

// concessionnaires qui font dans la vente
export const get_concessionnaires_vente = async () => {
  const response = await fetch(`${URL}api/vente/dealers`);
  return response.json();
};

// récuperer un concssionnaire spécifique
export const get_dealer = async (target) => {
  const response = await fetch(`${URL}api/dealers/${target}`);
  return response.json();
};

// récuperer un particulier
export const get_individual = async (target) => {
  const response = await fetch(`${URL}api/individuals/${target}`);
  return response.json();
};

// particuliers qui font dans la location
export const get_particuliers_location = async () => {
  const response = await fetch(`${URL}api/location/individuals/`);
  return response.json();
};

// particuliers qui font dans la vente
export const get_particuliers_vente = async () => {
  const response = await fetch(`${URL}api/vente/individuals/`);
  return response.json();
};

// récupere un voiture en location parrapport a son proprietaire
export const get_carrent = async (target) => {
  const response = await fetch(`${URL}api/carrent/${target}`);
  return response.json();
};

// récupere un voiture en vente parrapport a son proprietaire
export const get_car_sale = async (target) => {
  const response = await fetch(`${URL}api/carsale/${target}`);
  return response.json();
};

/**
 * ! fontion qui compare par rapport au model et la marque
 */
export const compare_car_model_marque = async (marque, model, service) => {
  const response = await fetch(
    `${URL}api/compare/${marque}/${model}/${service}`
  );
  return response.json();
};
