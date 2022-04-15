import { GET_PRODUCT, GET_ONE_PRODUCT, RESET } from './types';

import { getAllProducts, getOneProducts } from '../services/products';

export const getProducts = (products) => ({
  type: GET_PRODUCT,
  payload: products,
});
export const showOneProduct = (id) => ({ type: GET_ONE_PRODUCT, payload: id });
export const restState = () => ({ type: RESET });

export const fetchProduct = () => async (dispatch) => {
  try {
    const products = await getAllProducts();
    dispatch(getProducts(products));
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchOneProduct = (id) => async (dispatch) => {
  try {
    const product = await getOneProducts(id);
    dispatch(showOneProduct(product));
  } catch (error) {
    throw new Error(error);
  }
};
