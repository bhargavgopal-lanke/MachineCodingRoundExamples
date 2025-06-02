import React from "react";

const Pagination = (props) => {
  const { currentPage, setCurrenpage, noOfPages } = props;

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
    <div>
      <div className="pagination">
        <button onClick={goToPrevpage} disabled={currentPage === 0}>
          ⬅️
        </button>
        {[...Array(noOfPages).keys()].map((x, i) => {
          return (
            <div key={x}>
              <button
                className={
                  "pagination-numbers" + (x === currentPage ? " active" : "")
                }
                onClick={() => handleChange(x)}
              >
                {x}
              </button>
            </div>
          );
        })}
        <button onClick={goToNextpage} disabled={currentPage === noOfPages - 1}>
          ➡️
        </button>
      </div>
    </div>
  );
};

export default Pagination;
