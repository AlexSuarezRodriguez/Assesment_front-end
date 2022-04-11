import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchOneProduct, restState } from '../../store/actions';
import { PRODUCT_DETAILS } from '../../Constants/Routes';

function ProductCard(props) {
  const { id, image, title } = props;
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(restState());
    dispatch(fetchOneProduct(id));
  };

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <Link to={`${PRODUCT_DETAILS}/${id}`} onClick={handleLinkClick}>Go details </Link>
    </div>
  );
}
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
