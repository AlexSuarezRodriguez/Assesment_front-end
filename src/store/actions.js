import { GET_PRODUCT, GET_ONE_PRODUCT } from './types';

import { getAllProducts, getOneProducts } from '../services/products';

export const getProducts = (products) => ({
  type: GET_PRODUCT,
  payload: products,
});
export const getOneProduct = (id) => ({ type: GET_ONE_PRODUCT, product: id });

export const fetchProduct = () => async (dispatch) => {
  try {
    const products = await getAllProducts();
    dispatch(getProducts(products));
  } catch (error) {
    console.log(error);
  }
};
export const fetchOneProduct = (id) => async (dispatch) => {
  try {
    const product = await getOneProducts(id);
    dispatch(getOneProducts(product));
  } catch (error) {
    console.log(error);
  }
};
