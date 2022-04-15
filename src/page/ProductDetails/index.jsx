import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import './ProductDetail.css';

function ProductDetails() {
  const [load, setLoad] = useState(true);
  const product = useSelector((state) => state.oneProduct);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 5000);
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

          <div className="contendor_p">
            <div className="contendor_image_pro">
              <img src={image} alt={title} />
            </div>
            <div className="contendorTexto">
              <div className="contendorTexto__titulo">
                {title}
              </div>
              <div className="contendorTexto__parrafo">
                <div>
                  <p>{description}</p>
                  <p>{category}</p>
                  <p>{price}</p>
                  <p>{rate}</p>
                  <p>{count}</p>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default ProductDetails;
