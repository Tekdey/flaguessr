import * as constant from "../constant/constant";

export const getAllCountries = () => {
  return fetch(constant.restcountries_all).then((data) => data.json());
};
export const getCountriesByName = (search) => {
  return fetch(constant.restcountries_by_name + search);
};
