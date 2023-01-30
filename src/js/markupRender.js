const countriesList = document.querySelector(`.country-list`);
const countryDescription = document.querySelector(`.country-info`);

export const renderCountryList = data => {
  return (countriesList.innerHTML += data
    .map(({ name, flags }) => {
      return `
      <li> 
        <img src="${flags.svg}" width='24' alt=""> 
        ${name.official} 
      </li>
      `;
    })
    .join(``));
};

export const renderFullInfo = data => {
  return (countryDescription.innerHTML += data
    .map(({ capital, population, languages }) => {
      return `
      <li> 
        <b>Capital: </b>${capital}
      </li>
       <li> 
        <b>Population: </b>${population}
      </li>
       <li> 
        <b>Languages: </b>${Object.values(languages)}
      </li>
      `;
    })
    .join(``));
};

export const clearMarkup = () => {
  countriesList.innerHTML = '';
  countryDescription.innerHTML = '';
};
