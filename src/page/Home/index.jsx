import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { fetchProduct } from '../../store/actions';

function Home() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Home;
