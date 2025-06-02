import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

const PAGE_SIZE = 10;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrenpage] = useState(0);

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


  useEffect(() => {
    fetchData();
  }, []);


  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handleChange = (i) => {
    setCurrenpage(i);
  };

  const goToNextpage = () => {
    setCurrenpage((prev) => prev + 1);
  };
  const goToPrevpage = () => {
    setCurrenpage((prev) => prev - 1);
  };

  return (
    <div className="App">
      {!products.length ? (
        <h1>No Products Found</h1>
      ) : (
        <>
          <div className="pagination">
            <button onClick={goToPrevpage} disabled={currentPage === 0}>
              ⬅️
            </button>
            {[...Array(noOfPages).keys()].map((x, i) => {
              return (
                <div key={x}>
                  <button
                    className={
                      currentPage === x
                        ? "pagination-numbers active"
                        : "pagination-numbers"
                    }
                    onClick={() => handleChange(x)}
                  >
                    {x}
                  </button>
                </div>
              );
            })}
            <button
              onClick={goToNextpage}
              disabled={currentPage === noOfPages - 1}
            >
              ➡️
            </button>
          </div>
          <div className="prodcuts-grid">
            {products.slice(start, end).map((x) => {
              return <ProductCard key={x.id} data={x} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
