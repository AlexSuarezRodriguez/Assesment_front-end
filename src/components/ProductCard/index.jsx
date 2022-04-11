import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Countdown from 'react-countdown';
import { fetchOneProduct, restState } from '../../store/actions';
import { PRODUCT_DETAILS } from '../../Constants/Routes';
import './ProductCard.css';

function ProductCard(props) {
  const { id, image, title } = props;
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);
  const random = Math.floor(Math.random() * 3) + 1;

  const handleLinkClick = () => {
    dispatch(restState());
    dispatch(fetchOneProduct(id));
  };
  const handleOnComplete = () => {
    setIsActive(false);
  };

  return (
    <div className="card-tarjeta">
      <img src={image} alt={title} />
      <p>{title}</p>
      <Countdown
        date={Date.now() + 60000 * random}
        onComplete={handleOnComplete}
      />

      <Link
        className={isActive ? 'active' : 'deactive'}
        to={`${PRODUCT_DETAILS}/${id}`}
        onClick={handleLinkClick}
      >
        Go details
      </Link>
    </div>
  );
}
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
