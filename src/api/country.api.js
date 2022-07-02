import * as constant from "../constant/constant";

export const getAllCountries = () => {
  return fetch(constant.restcountries_all).then((data) => data.json());
};
// city : data[0].name.common
// flag : data[0].flags.png
