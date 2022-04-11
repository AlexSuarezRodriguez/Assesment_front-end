import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';

function ProductDetails() {
  const [load, setLoad] = useState(true);
  const product = useSelector((state) => state.oneProduct);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

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
      {load
        ? <Loading />
        : (
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
        )}
    </div>
  );
}

export default ProductDetails;
