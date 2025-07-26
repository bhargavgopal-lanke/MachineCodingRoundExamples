import React, { useEffect, useState } from "react";

const NoOFItems = 10;
const Pagination = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const data = await fetch("api");
    const res = await data.json();
    setData(res);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleClick = (i) => {
    setPage(i);
  };

  const totalPages = Math.floor(data.length / NoOFItems);
  const start = page * NoOFItems;
  const end = start + NoOFItems;

  return (
    <div>
      <div>
        {[...Array(totalPages).keys()].map((x) => {
          return (
            <button key={x} onClick={() => handleClick(x)}>
              {x}
            </button>
          );
        })}

        {data &&
          data.slice(start, end).map((x) => {
            return (
              <div key={x.id}>
                <img src={x.thumbnail} alt={x.title} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pagination;
