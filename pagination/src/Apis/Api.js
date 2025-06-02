// make an API call

export const fetchData = async () => {
  try {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    console.log(json?.products);
    return json?.products;
  } catch (err) {
    console.log(err.message);
  }
};
