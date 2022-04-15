import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Countdown from 'react-countdown-now';
import { fetchOneProduct, restState } from '../../store/actions';
import { PRODUCT_DETAILS } from '../../Constants/Routes';
import './ProductCard.css';

function ProductCard(props) {
  const { id, image, title } = props;
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);
  const [randomNumber, setRandonNumber] = useState(0);
  // const random = Math.floor(Math.random() * 3) + 1;
  useEffect(() => {
    setRandonNumber(Math.floor(Math.random() * 3) + 1);
  }, []);

  const handleLinkClick = () => {
    dispatch(restState());
    dispatch(fetchOneProduct(id));
  };
  const handleOnComplete = () => {
    setIsActive(false);
    setRandonNumber(0);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-text">
        <p>{title}</p>
      </div>
      <div className="stats">
        <div className="stat">
          <Countdown
            date={Date.now() + 60000 * randomNumber}
            onComplete={handleOnComplete}
            intervalDelay={1000}
          />
        </div>
        <div className="stat">
          <Link
            className={isActive ? 'active' : 'deactive'}
            to={`${PRODUCT_DETAILS}/${id}`}
            onClick={handleLinkClick}
          >
            Go details
          </Link>
        </div>

      </div>

    </div>
  );
}
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
