import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import { fetchData } from "./Apis/Api";

const PAGE_SIZE = 10;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrenpage] = useState(0);

  const getData = async () => {
    try {
      const data = await fetchData();
      setProducts(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <div className="App">
      {!products.length ? (
        <h1>No Products Found</h1>
      ) : (
        <>
          <Pagination
            noOfPages={noOfPages}
            setCurrenpage={setCurrenpage}
            currentPage={currentPage}
          />
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
