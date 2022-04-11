import React from 'react';
import { useSelector } from 'react-redux';

function ProductDetails() {
  const product = useSelector((state) => state.oneProduct);

  const {
    title,
    price,
    category,
    description,
    image,
    rating: { rate, count },
  } = product;
  return (
    <div>
      {title}
      ,
      {price}
      ,
      {category}
      ,
      {description}
      ,
      {rate}
      ,
      {count}
      <img src={image} alt="fgv" />
    </div>
  );
}

export default ProductDetails;
