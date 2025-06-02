import { SEARCH_API_URL } from "../utils/util";

export const fetchSearchList = async () => {
  try {
    const data = await fetch(SEARCH_API_URL);
    const json = await data.json();
    return json?.items;
  } catch (error) {
    console.log(error);
  }
};
