import React, { useEffect, useState } from "react";

const Practice = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch(
        `https://dummyjson.com/products?limit=${page * 10}`
      );
      const res = await data.json();
      console.log(res);
      setData(res);
      setPage(page + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const throttling = (cb, d) => {
    let last = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cb(...args);
    };
  };

  const handleScroll = throttling(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 500 >
      document.documentElement.offsetHeight
    ) {
      fetchProducts();
    }
  }, 500);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const { products: allProducts } = data;

  return (
    <div>
      <div>
        {allProducts?.length > 0 &&
          allProducts.map((x) => {
            return (
              <div key={x.id}>
                <img src={x.thumbnail} alt={x.title} />
                <p>{x.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Practice;
