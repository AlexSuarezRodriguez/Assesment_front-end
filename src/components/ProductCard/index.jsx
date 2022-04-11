import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PRODUCT_DETAILS } from '../../Constants/Routes';

function ProductCard(props) {
  const { id, image, title } = props;
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <Link to={`${PRODUCT_DETAILS}/${id}`}>go viewer </Link>
    </div>
  );
}
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
