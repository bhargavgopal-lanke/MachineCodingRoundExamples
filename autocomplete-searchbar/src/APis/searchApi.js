import { SEARCH_API_URL } from "../utils/util";

export const fetchSearchList = async (inputValue) => {
  try {
    const data = await fetch(SEARCH_API_URL + inputValue);
    const json = await data.json();
    return json?.recipes;
  } catch (error) {
    console.log(error);
  }
};
