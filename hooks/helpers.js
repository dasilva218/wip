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
export const compare_car_model_marque = async (
  marque,
  model,
  service
) => {
  const response = await fetch(
    `${URL}api/compare/${marque}/${model}/${service}`
  );
  return response.json();
};

/**
 * ! get partners
 */

export const get_partners = async () => {
  const response = await fetch(`${URL}api/partners/`);

  return response.json();
};

/**
 ** get a partner
 * @returns un partenaire
 */
export const get_partner = async (target) => {
  const response = await fetch(`${URL}api/partners/${target}`);

  return response.json();
};


/********************** crud des véhicules ******************/
/**
 * * ajoute voiture
 * @param {*} formData
 * @returns
 */
export async function addCarrs(formData) {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${URL}api/cars`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}

/**
 * * Delete a car
 * @param {*} carId 
 * @returns 
 */ 
export async function deleteCar(carId) {
  const Options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(
    `${URL}api/cars/${carId}`,
    Options
  );
  const json = await response.json();
  return json;
}

/**
 * * get single car
 * @param {*} carId 
 * @returns 
 */
export const getCar = async (carId) => {
  const response = await fetch(`${URL}api/cars/${carId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};

/**
 ** modifie un véhicule 
 * @param {*} userId 
 * @param {*} formData 
 * @returns 
 */
export async function updateCar(carId, formData){
    const Options = {
        method : 'PUT',
        headers : { 'Content-Type': "application/json"},
        body: JSON.stringify(formData)
    }

    const response = await fetch(`${URL}api/cars/${carId}`, Options);
    const json = await response.json()
    return json;
}