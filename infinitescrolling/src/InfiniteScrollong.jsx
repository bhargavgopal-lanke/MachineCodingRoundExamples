import { useEffect, useState } from "react";

const InfiniteScrollong = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const apiData = await fetch(
        `https://dummyjson.com/products?limit=${page * 10}`
      );
      const res = await apiData.json();
      console.log("res", res);
      setProductsData(res);
      setPage(page + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const throttling = (cb, d) => {
    let last = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - last < d) return; // check if the time since the last fn call is less than d ms.
      last = now;
      return cb(...args);
    };
  };

  const { products: allProducts } = productsData;

  const handleScroll = throttling(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 500 >
      document.documentElement.offsetHeight
    ) {
      fetchData();
    }
  }, 500);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (loading) return <h1>...loading</h1>;
  return (
    <div>
      <h1>Infinite Scrolling</h1>
      {allProducts?.length > 0 &&
        allProducts.map((x) => {
          return (
            <div key={x.id}>
              <h1>{x.title}</h1>
              <img src={x.thumbnail} alt={x.title} />
            </div>
          );
        })}
    </div>
  );
};

export default InfiniteScrollong;
