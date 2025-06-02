// make an API call

import { PRODUCTS_URL } from "../utils/util";

export const fetchData = async () => {
  try {
    const data = await fetch(PRODUCTS_URL);
    const json = await data.json();
    return json?.products;
  } catch (err) {
    console.log(err.message);
  }
};
