import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  // make an API call
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    console.log(json?.products);
    setProducts(json?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="pagination"></div>
      <div className="prodcuts-grid">
        {products.map((x) => {
          return (
            <div className="productlist-items" key={x.id}>
              <img src={x.thumbnail} alt="thumbnail" />
              <h1>{x.title}</h1>
              <p>{x.description}</p>
              <span>Price: {x.price}</span> <br />
              <span>Rating: {x.rating}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
