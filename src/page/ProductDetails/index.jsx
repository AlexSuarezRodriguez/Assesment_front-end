/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/actions';
import Loading from '../../components/Loading';
import './ProductDetail.css';

function ProductDetails() {
  const [load, setLoad] = useState(true);
  const product = useSelector((state) => state.oneProduct);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchOneProduct(params.id));
    setTimeout(() => {
      setLoad(false);
    }, 2000);
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
    <>
      {load
        ? <Loading />
        : (
          <main className="contendor">
            <div className="contendor_image">
              <img src={image} alt={title} />
            </div>
            <div className="contendorTexto">
              <div className="contendorTexto__titulo">
                {title}
              </div>
              <div className="contendorTexto__parrafo">
                <div>
                  <p>{description}</p>
                  <p>
                    category:
                    {category}
                  </p>
                  <p>
                    price:
                    {price}
                  </p>
                  <div className="stats-pro">
                    <div className="stat-pro">
                      <p>
                        rate:
                        <br />
                        {rate}
                      </p>
                    </div>
                    <div className="stat-pro">
                      <p>
                        count:
                        <br />
                        {count}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}
    </>
  );
}

export default ProductDetails;
