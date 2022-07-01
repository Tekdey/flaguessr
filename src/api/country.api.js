import * as constant from "../constant/constant";

export const getAllCountries = () => {
  return fetch(constant.restcountries_all).then((data) => data.json());
};
