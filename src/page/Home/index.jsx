import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { fetchProduct } from '../../store/actions';
import Loading from '../../components/Loading';
import './Home.css';

function Home() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(fetchProduct());
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  return (
    <div className="backgorund">
      {
      load
        ? (<Loading />)
        : (
          <div className="card-container">
            {
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                />
              ))
              }
          </div>
        )
    }
    </div>
  );
}

export default Home;
