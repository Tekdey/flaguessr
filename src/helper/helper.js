/**
 * It takes an array of countries, a number of responses to return, and the correct response, and
 * returns an array of responses with the correct response in a random position.
 * @param data - the array of objects
 * @param howManyResponse - the number of responses you want to return
 * @param goodResponse - the correct answer
 * @returns an array of random responses with the correct response in a random position
 */
export function getRandomReponse(data, howManyResponse, goodResponse) {
  let newArr = [goodResponse];
  let _i = 1;
  while (_i < howManyResponse) {
    newArr.push(data[getRandomNumber(data.length)].name.common);
    _i++;
  }
  const randomElement = getRandomNumber(newArr.length);
  [newArr[0], newArr[randomElement]] = [newArr[randomElement], newArr[0]];
  return newArr;
}
export function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
export function getGoodResponse(data) {
  return data[getRandomNumber(data.length)];
}