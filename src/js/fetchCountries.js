import { notFoundExeptions } from './exeptions';

const BASE_URL = `https://restcountries.com/v3.1/name/`;

export const fetchCountries = countryName => {
  const searchParams = new URLSearchParams({
    fields: `name,capital,population,flags.svg,languages,flags`,
  });
  return fetch(`${BASE_URL}/${countryName}?${searchParams}`).then(response => {
    if (!response.ok && countryName.length > 0) {
      notFoundExeptions(response);
      throw new Error(response.status);
    }
    return response.json();
  });
};
