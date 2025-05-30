import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  // make an API call
  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=200");
      const json = await data.json();
      console.log(json?.products);
      setProducts(json?.products);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (products.length === 0) {
    return <h1>No Products Found</h1>;
  }

  return (
    <div className="App">
      <div className="pagination"></div>
      <div className="prodcuts-grid">
        {products.map((x) => {
          return <ProductCard key={x.id} data={x} />;
        })}
      </div>
    </div>
  );
}

export default App;
