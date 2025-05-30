import React from "react";

const ProductCard = ({ data }) => {
  const { description, title, thumbnail, rating, price } = data;
  return (
    <div>
      <div className="productlist-items">
        <img src={thumbnail} alt="thumbnail" />
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Price: {price}</span> <br />
        <span>Rating: {rating}</span>
      </div>
    </div>
  );
};

export default ProductCard;
