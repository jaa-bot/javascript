export const games = ["Zelda", "Mario Bros", "Metroid", "Chrono"];

/**
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */

//BIEN
export const deleteFirtPosition = () => {
  if (games.length === 0) {
    return undefined;
  }

  return games.shift();
};

/**
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */

//BIEN
export const deleteLastPosition = () => {
  if (games.length === 0) {
    return undefined;
  }

  return games.pop();
};

/**
 * Inserts new element at the start of an array, and returns the new length of the array.
 * @param item Element to insert at the start of the array.
 */

//BIEN
export const addFirstPosition = (item) => {
  return games.unshift(item);
}

/**
 * Appends new element to the end of an array, and returns the new length of the array.
 * @param item New element to add to the array.
 */

//BIEN
export const addLastPosition = (item) => {
  return games.push(item);
};

/******************************************************/
export const got = [
  "Lannister",
  "Targaryen",
  "Stark",
  "Baratheon",
  "Greyjoy",
  "Arryn",
  "Martell",
];

/**
 * Removes Baratheon and Greyjoy houses using splice
 * @returns array with items removed
 */
export const removeBaratheonAndGreyjoy = () => {
  const indexBaratheon = got.indexOf("Baratheon");
  const indexGreyjoy = got.indexOf("Greyjoy");

  if (indexBaratheon !== -1) {
    got.splice(indexBaratheon, 1);
  }

  if (indexGreyjoy !== -1) {
    got.splice(indexGreyjoy, 1);
  }

  return got;
};

/**
 * Removes Arryn house using splice
 * @returns array with item removed
 */
export const removeArryn = () => {
  const indexArryn = got.indexOf("Arryn");

  if (indexArryn !== -1) {
    got.splice(indexArryn, 1);
  }

  return got;
};

/******************************************************/
export const narutoCharacters = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Hinata",
  "Kakashi",
  "Jiraiya",
  "Itachi",
  "Gaara",
];

/**
 * Gets the index of Naruto
 * @returns the index found.
 */

//BIEN
export const getNaruto = () => {
  const narutoIndex = narutoCharacters.indexOf("Naruto");
  return narutoIndex;
};

/**
 * Gets the index of Gaara
 * @returns the index found.
 */

//BIEN
export const getGaara = () => {
  const gaaraIndex = narutoCharacters.indexOf("Gaara");
  return gaaraIndex;
};

/**
 * Gets the index of Rock Lee
 * @returns the index found.
 */

//BIEN
export const getRockLee = () => {
  const gaaraIndex = narutoCharacters.indexOf("Rock Lee");
  return gaaraIndex;
};

/**
 * Reverses the elements in Naruto Characters array
 * @returns the reversed given array
 */

//BIEN
export const reverseNarutoCharacters = () => {
  const reversedArray = [...narutoCharacters].reverse();
  return reversedArray;
};
