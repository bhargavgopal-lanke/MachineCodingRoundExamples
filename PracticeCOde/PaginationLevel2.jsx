import React, { useEffect, useRef, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

const NO_OF_PAGES = 10;

const App = () => {
  const [pageApiData, setPageApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  const fetchPageData = async (url) => {
    setLoading(true);
    try {
      const pageData = await fetch(url);
      const pageres = await pageData.json();
      setPageApiData(pageres);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPageData(url);
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const totalPages = Math.floor(pageApiData.length / NO_OF_PAGES);
  const start = count * NO_OF_PAGES;
  const end = start + NO_OF_PAGES;

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const hanldeClick = (i) => {
    setCount(i);
  };

  return (
    <div>
      <div className="pagination">
        <button onClick={decrement} disabled={count === 0}>
          ◀️
        </button>
        {[...Array(totalPages).keys()].map((x) => {
          return (
            <span
              style={{
                border: "1px solid",
                display: "inline-block",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => hanldeClick(x)}
            >
              {x}
            </span>
          );
        })}
        <button onClick={increment} disabled={count === totalPages - 1}>
          ▶️
        </button>
      </div>

      {pageApiData &&
        pageApiData.slice(start, end).map((x) => {
          return (
            <div key={x.id}>
              <h4>{x.title}</h4>
              <p>{x.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
