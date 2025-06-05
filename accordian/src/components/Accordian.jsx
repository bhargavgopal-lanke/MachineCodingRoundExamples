import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [openIndex, setIndex] = useState(null);

  const hanldeClick = (index) => {
    setIndex(openIndex === index ? null : index);
  };


  return (
    <div>
      {(!items || items.length === 0 )? (
        <h1>No items found</h1>
      ) : (
        items.map((item, i) => {
          return (
            <div className="accordian" key={i}>
              <h1 className="parent" onClick={() => hanldeClick(i)}>
                {item.title}
                <span className="icon">{openIndex === i ? "⬆️" : "⬇️"}</span>
              </h1>
              {openIndex === i && (
                <div className={`child`}>
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Accordian;
